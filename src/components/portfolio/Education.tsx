import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const coursework = [
    "Artificial Intelligence & Machine Learning",
    "C# and Java Programming",
    "Web Development",
    "Database Management Systems",
    "Data Structures",
  ];

  return (
    <section id="education" className="py-20 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <Card className="card-hover border-border/50">
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl sm:text-2xl text-foreground">
                Bachelor of Computer Applications (BCA)
              </CardTitle>
              <p className="text-muted-foreground mt-1">Kuvempu University</p>
              <p className="text-sm text-primary font-medium mt-1">
                Expected Graduation: 2026
              </p>
            </div>
          </CardHeader>
          
          <CardContent>
            <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {coursework.map((course, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {course}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;