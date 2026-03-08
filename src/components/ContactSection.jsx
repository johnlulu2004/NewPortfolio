import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Whether it's a project idea, research collaboration, or just want to
          say hi — my inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Info</h3>

              <div className="space-y-5">
                {[
                  {
                    icon: <Mail className="h-5 w-5 text-primary" />,
                    label: "Email",
                    value: "2004.john.lu@gmail.com",
                    href: "mailto:2004.john.lu@gmail.com",
                  },
                  {
                    icon: <Phone className="h-5 w-5 text-primary" />,
                    label: "Phone",
                    value: "+1 (240) 418-6457",
                    href: "tel:+12404186457",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-primary" />,
                    label: "Location",
                    value: "Baltimore, MD",
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Find Me Online
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://www.linkedin.com/in/john-lu-35038628a/",
                    icon: <Linkedin size={18} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/johnlu2004/",
                    icon: <Instagram size={18} />,
                    label: "Instagram",
                  },
                  {
                    href: "https://github.com/johnlulu2004",
                    icon: <Github size={18} />,
                    label: "GitHub",
                  },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-xs">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm transition-colors"
                  placeholder="Hey John, I'd love to chat about..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
