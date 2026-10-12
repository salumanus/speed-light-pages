// Netlify event function: runs after every verified form submission on the site.
// For the "rejestracja" form it adds the contact to the GetResponse list that has the
// "Dni Światła 2026" autoresponder, so GetResponse sends the confirmation email.
// Requires the GETRESPONSE_API_KEY environment variable in Netlify.

const API = "https://api.getresponse.com/v3";
const FORM_NAME = "rejestracja";
const AUTORESPONDER_NAME = process.env.GETRESPONSE_AUTORESPONDER_NAME || "Dni Światła 2026";

const gr = async (path, init = {}) => {
  const res = await fetch(API + path, {
    ...init,
    headers: {
      "X-Auth-Token": `api-key ${process.env.GETRESPONSE_API_KEY}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  return { status: res.status, body };
};

// The list (campaign) is taken from the autoresponder, so nothing has to be configured
// beyond the API key. GETRESPONSE_CAMPAIGN_ID overrides it when set.
const findCampaignId = async () => {
  if (process.env.GETRESPONSE_CAMPAIGN_ID) return process.env.GETRESPONSE_CAMPAIGN_ID;
  const { status, body } = await gr(`/autoresponders?query[name]=${encodeURIComponent(AUTORESPONDER_NAME)}`);
  if (status !== 200 || !Array.isArray(body) || !body.length) {
    throw new Error(`autoresponder "${AUTORESPONDER_NAME}" not found (HTTP ${status}): ${JSON.stringify(body)}`);
  }
  // the API returns the list id both as `campaignId` and as `campaign.id`
  return body[0].campaignId || (body[0].campaign && body[0].campaign.id);
};

const findCustomFieldId = async (name) => {
  const { status, body } = await gr(`/custom-fields?query[name]=${encodeURIComponent(name)}`);
  if (status !== 200 || !Array.isArray(body)) return null;
  const hit = body.find((f) => f.name === name);
  return hit ? hit.customFieldId : null;
};

export default async (req) => {
  const { payload } = await req.json();
  if (!payload || payload.form_name !== FORM_NAME) {
    return new Response("ignored", { status: 200 });
  }
  const data = payload.data || {};
  const email = (data.email || "").trim();
  if (!email) return new Response("no email", { status: 200 });

  if (!process.env.GETRESPONSE_API_KEY) {
    console.warn("GETRESPONSE_API_KEY is not set; contact not added to GetResponse:", email);
    return new Response("skipped", { status: 200 });
  }

  try {
    const campaignId = await findCampaignId();
    const customFieldValues = [];
    // GetResponse's "phone" field wants "+<prefix><digits>"; numbers typed without a prefix are treated as Polish
    const digits = String(data.phone || "").replace(/\D/g, "");
    const phone = !digits ? "" : String(data.phone).trim().startsWith("+") ? "+" + digits : "+48" + digits.replace(/^48/, "");
    for (const [field, value] of [["company", String(data.company || "").trim()], ["phone", phone]]) {
      if (!value) continue;
      const id = await findCustomFieldId(field);
      if (id) customFieldValues.push({ customFieldId: id, value: [value] });
    }

    const contact = {
      email,
      name: (data.name || "").trim() || undefined,
      campaign: { campaignId },
      dayOfCycle: 0,
      ipAddress: data.ip || undefined,
      ...(customFieldValues.length ? { customFieldValues } : {}),
    };

    let { status, body } = await gr("/contacts", { method: "POST", body: JSON.stringify(contact) });
    if (status === 400 && customFieldValues.length) {
      // a rejected custom field must not block the registration: retry with e-mail and name only
      console.warn("GetResponse: custom fields rejected, retrying without them", JSON.stringify(body));
      delete contact.customFieldValues;
      ({ status, body } = await gr("/contacts", { method: "POST", body: JSON.stringify(contact) }));
    }
    if (status === 202) {
      console.log("GetResponse: contact queued", email, "campaign", campaignId);
    } else if (status === 409) {
      console.log("GetResponse: contact already on the list", email);
    } else {
      console.error("GetResponse: adding contact failed", status, JSON.stringify(body));
    }
  } catch (err) {
    // Never fail the submission itself; Netlify has already stored it and sent the e-mail notification.
    console.error("GetResponse integration error:", err);
  }
  return new Response("ok", { status: 200 });
};
