import { User, MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: GraduationCap, label: "BCA Student", value: "Kuvempu University" },
    { icon: MapPin, label: "Location", value: "Bengaluru, India" },
    { icon: Target, label: "Focus Areas", value: "AI/ML & Data Analysis" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-primary/5 rounded-full glow-blob" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Who I Am</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    I am a Bachelor of Computer Applications (BCA) student at Kuvempu University, 
                    expected to graduate in 2026. I have a strong foundation in software development, 
                    object-oriented programming, database management, and data analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <p className="text-muted-foreground text-base leading-relaxed">
                I work with Python, Java, C#, JavaScript, SQL, and web technologies, 
                and I enjoy applying data-driven approaches to build efficient and scalable solutions. 
                My interests include software engineering, AI/ML, and data analytics.
              </p>
            </div>
          </div>

          {/* Sidebar highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote/motivation card */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-sm italic text-muted-foreground">
                "Passionate about transforming data into actionable insights and building solutions that make a difference."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 decorative-line" />
    </section>
  );
};

export default About;