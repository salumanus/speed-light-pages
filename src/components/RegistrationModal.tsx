import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "rejestracja") {
        setSuccess(true);
      }
    }
  }, [open]);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setSuccess(false);
      if (typeof window !== "undefined" && window.location.search.includes("success=rejestracja")) {
        const url = window.location.pathname + window.location.hash;
        window.history.replaceState({}, "", url);
      }
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
                action="/?success=rejestracja#rejestracja"
                data-netlify="true"
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
                    value="yes"
                    required
                    className="mt-1 w-4 h-4 rounded accent-accent shrink-0"
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#D61F2F", borderRadius: "2rem" }}
                >
                  Zarejestruj się
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
