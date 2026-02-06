import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "6hmsathvik@gmail.com",
      href: "mailto:6hmsathvik@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sathwikr",
      href: "https://github.com/sathwikr",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sathwikr",
      href: "https://linkedin.com/in/sathwikr",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full glow-blob" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full glow-blob" />

      <div className="section-container relative z-10">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left side - CTA */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm actively seeking opportunities in software development and data analysis. 
                Feel free to reach out for collaborations, opportunities, or just to connect.
              </p>
              
              <Button asChild className="gap-2 w-full sm:w-auto shadow-lg shadow-primary/20">
                <a href="mailto:6hmsathvik@gmail.com">
                  <Send className="w-4 h-4" />
                  Send Message
                </a>
              </Button>

              {/* Decorative element */}
              <div className="mt-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact cards */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium text-sm hover:text-primary transition-colors link-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;