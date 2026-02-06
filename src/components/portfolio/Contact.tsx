import { Mail, MapPin, Github, Linkedin } from "lucide-react";
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
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sathwikr",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sathwikr",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-4 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <Button 
                key={index} 
                variant="outline" 
                asChild
                className="gap-2"
              >
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;