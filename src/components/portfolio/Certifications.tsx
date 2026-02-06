import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Structures and Algorithms in Java",
      provider: "Udemy / Coursera",
      category: "Programming",
    },
    {
      title: "AI / ML Fundamentals",
      provider: "Coursera",
      category: "AI/ML",
    },
    {
      title: "Web Development Bootcamp",
      provider: "Online",
      category: "Web Dev",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full glow-blob" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 hidden lg:block">
        <div className="w-16 h-16 border border-primary/10 rounded-full" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Certifications & Training</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="card-hover border-border/50 bg-card/70 backdrop-blur-sm overflow-hidden group"
            >
              {/* Top gradient */}
              <div className="h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {cert.category}
                    </span>
                    <h3 className="font-semibold text-foreground mb-2 mt-1">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ExternalLink className="w-3 h-3" />
                      {cert.provider}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-10 flex justify-center">
          <div className="px-6 py-3 rounded-full bg-card/50 border border-border/50 flex items-center gap-3">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Continuously learning & upskilling</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;