import { Facebook, Linkedin, Youtube } from "lucide-react";

const SocialBar = () => (
  <div className="border-t border-dark-fg/10 py-5 bg-[#393941]">
    <div className="container-conf flex items-center justify-between gap-4">
      <span className="text-dark-fg text-sm font-semibold uppercase tracking-widest">
        Social Media
      </span>
      <div className="flex items-center gap-3">
        <a
          href="#"
          aria-label="YouTube"
          className="w-10 h-10 rounded-full bg-dark-fg text-dark-bg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Youtube size={18} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full bg-dark-fg text-dark-bg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="w-10 h-10 rounded-full bg-dark-fg text-dark-bg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Facebook size={18} />
        </a>
      </div>
    </div>
  </div>
);

export default SocialBar;
