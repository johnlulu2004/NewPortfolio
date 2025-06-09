import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const HandleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {" "}
        <h2 className=" text-3xl md: text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I am always open to new opportunities!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 ">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className=" flex item-start space-x-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Mail className=" h-6 w-6  text-primary"></Mail>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:2004.john.lu@gmail.com"
                    className="text-muted-foreground hover-primary"
                  >
                    2004.john.lu@gmail.com
                  </a>
                </div>
              </div>

              <div className=" flex item-start space-x-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Phone className=" h-6 w-6  text-primary"></Phone>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+12404186457"
                    className="text-muted-foreground hover-primary"
                  >
                    +1 (240) 418-6457
                  </a>
                </div>
              </div>
              <div className=" flex item-start space-x-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <MapPin className=" h-6 w-6  text-primary"></MapPin>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover-primary">
                    Baltimore, MD
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-md mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/john-lu-35038628a/">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/johnlu2004/">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className=" bg-card p-8 rounded-lg shadow-xs">
            <h3 className=" text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6 " action="" onSubmit={HandleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-md mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-md mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john.doe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-md mb-2">
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex item-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send></Send>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
