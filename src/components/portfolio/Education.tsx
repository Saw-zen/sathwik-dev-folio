import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const coursework = [
    "Artificial Intelligence & Machine Learning",
    "C# and Java Programming",
    "Web Development",
    "Database Management Systems",
    "Data Structures",
  ];

  return (
    <section id="education" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full glow-blob" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Education</h2>
        
        <Card className="border-border/50 bg-card/70 backdrop-blur-sm overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          
          <CardContent className="pt-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main education info */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-muted-foreground mb-2">Kuvempu University</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Expected Graduation: 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coursework sidebar */}
              <div className="lg:border-l lg:border-border/50 lg:pl-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">Relevant Coursework</p>
                </div>
                <ul className="space-y-2">
                  {coursework.map((course, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline indicator */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-card/50 border border-border/50">
            <div className="w-3 h-3 rounded-full bg-primary/30 border-2 border-primary" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/20" />
            <div className="w-3 h-3 rounded-full bg-primary/20 border-2 border-primary/50" />
            <span className="text-xs text-muted-foreground ml-2">2023 → 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;