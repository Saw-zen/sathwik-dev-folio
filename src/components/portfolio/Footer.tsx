import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top decorative line */}
      <div className="decorative-line" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="py-12 relative z-10">
        <div className="section-container">
          {/* Main footer content */}
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-foreground mb-2">Sathwik R</p>
            <p className="text-sm text-muted-foreground">
              Aspiring Software Developer | AI & Data Analysis Enthusiast
            </p>
          </div>

          {/* Quick links */}
          <div className="flex justify-center gap-6 mb-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Sathwik R. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using
              <span className="inline-flex items-center gap-1 text-foreground">
                <Code2 className="w-4 h-4" />
                React & Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;