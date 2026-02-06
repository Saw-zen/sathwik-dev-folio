import { Trophy, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Extracurricular = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Coding Competitions",
      description: "Active participation in coding competitions and hackathons.",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Strong time management and discipline developed through regular fitness training.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Team coordination and strategic thinking in collaborative environments.",
    },
  ];

  return (
    <section id="extracurricular" className="py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Extracurricular & Soft Skills</h2>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {activities.map((activity, index) => (
            <Card key={index} className="card-hover border-border/50">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;