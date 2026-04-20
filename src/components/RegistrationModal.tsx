import { useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string)?.trim() ?? "";
    const message = (formData.get("message") as string)?.trim() ?? "";
    const consent = formData.get("consent");

    if (!name || name.length > 100) return setError("Podaj imię i nazwisko (max 100 znaków).");
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 255) return setError("Podaj prawidłowy adres e-mail.");
    if (!phone || phone.length > 20) return setError("Podaj prawidłowy numer telefonu.");
    if (!message || message.length > 1000) return setError("Wiadomość jest wymagana (max 1000 znaków).");
    if (!consent) return setError("Wymagana jest zgoda na przetwarzanie danych.");

    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "rejestracja",
          name,
          company: ((formData.get("company") as string) ?? "").trim(),
          email,
          phone,
          message,
          consent: "yes",
        }),
      });
      setSuccess(true);
      form.reset();
    } catch {
      setError("Coś poszło nie tak. Spróbuj ponownie.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setSuccess(false);
      setError(null);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-lg border-0 p-0 bg-transparent shadow-none [&>button]:text-white [&>button]:opacity-80 [&>button]:hover:opacity-100 [&>button]:right-5 [&>button]:top-5"
      >
        <div
          className="rounded-2xl p-6 sm:p-8 text-white"
          style={{ backgroundColor: "#0f0f1a" }}
        >
          {success ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-accent" />
              <DialogTitle className="font-heading text-2xl mb-2">
                Dziękujemy za rejestrację!
              </DialogTitle>
              <DialogDescription className="text-white/70">
                Odezwiemy się wkrótce.
              </DialogDescription>
            </div>
          ) : (
            <>
              <DialogTitle className="font-heading text-3xl mb-2">Rejestracja</DialogTitle>
              <DialogDescription className="text-white/70 mb-6">
                Wypełnij formularz, aby zarejestrować się na konferencję.
              </DialogDescription>

              <form
                name="rejestracja"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="rejestracja" />

                <div>
                  <label htmlFor="reg-name" className="block text-sm mb-1.5 text-white/90">
                    Imię i Nazwisko <span className="text-accent">*</span>
                  </label>
                  <input
                    id="reg-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reg-company" className="block text-sm mb-1.5 text-white/90">
                    Nazwa Firmy
                  </label>
                  <input
                    id="reg-company"
                    name="company"
                    type="text"
                    maxLength={100}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reg-email" className="block text-sm mb-1.5 text-white/90">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="reg-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reg-phone" className="block text-sm mb-1.5 text-white/90">
                    Telefon <span className="text-accent">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg bg-white/10 border border-r-0 border-white/10 text-white/90 gap-1.5">
                      <span aria-hidden>🇵🇱</span>
                      <span className="text-sm">+48</span>
                    </span>
                    <input
                      id="reg-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      placeholder="512 345 678"
                      className="flex-1 px-4 py-2.5 rounded-r-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-message" className="block text-sm mb-1.5 text-white/90">
                    Wiadomość <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="reg-message"
                    name="message"
                    required
                    maxLength={1000}
                    style={{ minHeight: "120px" }}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-y"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-white/80 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded accent-accent shrink-0"
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności.
                  </span>
                </label>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#D61F2F", borderRadius: "2rem" }}
                >
                  {submitting ? "Wysyłanie..." : "Zarejestruj się"}
                </button>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
