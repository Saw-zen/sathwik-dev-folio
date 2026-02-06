import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Structures and Algorithms in Java",
      provider: "Udemy / Coursera",
    },
    {
      title: "AI / ML Fundamentals",
      provider: "Coursera",
    },
    {
      title: "Web Development Bootcamp",
      provider: "Online",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-card/30">
      <div className="section-container">
        <h2 className="section-title">Certifications & Training</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
