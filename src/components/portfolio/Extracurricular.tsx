import { Trophy, Clock, Users } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Coding Competitions",
      description: "Participation in coding competitions and hackathons",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Strong time management and discipline through fitness training",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Team collaboration and strategic thinking",
    },
  ];

  return (
    <section id="extracurricular" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Extracurricular & Professional Traits</h2>
        
        <div className="grid sm:grid-cols-3 gap-5">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-5 rounded-lg border border-border/50 bg-card/30"
            >
              <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                <activity.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
