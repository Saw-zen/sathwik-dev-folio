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
    <section id="languages" className="section-padding bg-card/30">
      <div className="section-container">
        <h2 className="section-title">Languages</h2>
        
        <div className="flex flex-wrap gap-3">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="px-4 py-2.5 bg-card border border-border/50 rounded-lg"
            >
              <span className="text-foreground font-medium text-sm">{lang.name}</span>
              {lang.level && (
                <span className="text-xs text-primary font-medium ml-2">
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
