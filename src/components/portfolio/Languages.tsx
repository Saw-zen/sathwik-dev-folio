import { Globe, Star } from "lucide-react";

const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent", primary: true },
    { name: "Tamil", level: null, primary: false },
    { name: "Kannada", level: null, primary: false },
    { name: "Hindi", level: null, primary: false },
    { name: "Telugu", level: null, primary: false },
    { name: "Spanish", level: null, primary: false },
    { name: "Malayalam", level: null, primary: false },
  ];

  return (
    <section id="languages" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full glow-blob" />
      
      <div className="section-container relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-primary/10">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title mb-0">Languages</h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`px-5 py-3 rounded-xl border backdrop-blur-sm transition-all duration-200 hover:scale-105 ${
                lang.primary 
                  ? 'bg-primary/10 border-primary/30 shadow-lg shadow-primary/5' 
                  : 'bg-card/50 border-border/50 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-2">
                {lang.primary && <Star className="w-4 h-4 text-primary fill-primary" />}
                <span className="text-foreground font-medium">{lang.name}</span>
                {lang.level && (
                  <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/20 rounded-full">
                    {lang.level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Language count indicator */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-sm text-muted-foreground px-4 py-2 bg-card/50 rounded-full border border-border/50">
            <span className="text-primary font-semibold">7</span> languages
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Languages;