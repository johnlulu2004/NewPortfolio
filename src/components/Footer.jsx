import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left: Brand */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-sm">
            John <span className="text-primary">Lu</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} — Built with React & Tailwind
          </p>
        </div>

        {/* Center: Socials */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/john-lu-35038628a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/johnlulu2004"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.instagram.com/johnlu2004/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Right: Back to top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
