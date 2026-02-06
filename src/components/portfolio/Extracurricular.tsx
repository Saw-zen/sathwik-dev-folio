import { Trophy, Clock, Users, Dumbbell, Target, Zap } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Coding Competitions",
      description: "Active participation in coding competitions and hackathons",
      highlight: "Problem Solver",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Discipline",
      description: "Strong time management and discipline through regular fitness training",
      highlight: "Self-Motivated",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective team coordination and strategic thinking in group projects",
      highlight: "Team Player",
    },
  ];

  return (
    <section id="extracurricular" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full glow-blob" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Extracurricular & Professional Traits</h2>
        
        <div className="grid sm:grid-cols-3 gap-5">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover group overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <activity.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                    {activity.highlight}
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal traits summary */}
        <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Target, label: "Goal-Oriented" },
              { icon: Zap, label: "Quick Learner" },
              { icon: Clock, label: "Punctual" },
            ].map((trait, index) => (
              <div key={index} className="flex items-center gap-2">
                <trait.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{trait.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;