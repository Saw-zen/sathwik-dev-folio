import { GraduationCap } from "lucide-react";
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
    <section id="education" className="section-padding bg-card/30">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <Card className="border-border/50 bg-card/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-muted-foreground mb-1">Kuvempu University</p>
                <p className="text-sm text-muted-foreground mb-6">Expected Graduation: 2026</p>
                
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Relevant Coursework:</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
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
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
