import { Languages as LanguagesIcon } from "lucide-react";

const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: null },
    { name: "Kannada", level: null },
    { name: "Hindi", level: null },
    { name: "Telugu", level: null },
    { name: "Spanish", level: null },
    { name: "Malayalam", level: null },
  ];

  return (
    <section id="languages" className="py-20 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Languages</h2>
        
        <div className="flex flex-wrap gap-3">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border/50"
            >
              <LanguagesIcon className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">{lang.name}</span>
              {lang.level && (
                <span className="text-xs text-primary font-medium">
                  ({lang.level})
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;