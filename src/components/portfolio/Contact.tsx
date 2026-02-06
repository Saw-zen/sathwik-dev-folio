import { Mail, MapPin, Github, Linkedin } from "lucide-react";

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
    <section id="contact" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-lg mb-8">
            I'm actively seeking opportunities in software development and data analysis. 
            Feel free to reach out.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/30"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
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
    </section>
  );
};

export default Contact;
