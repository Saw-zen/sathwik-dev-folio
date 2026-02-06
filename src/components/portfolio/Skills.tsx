import { Code2, Globe, Database, Wrench, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "C#", "Python", "JavaScript"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS3", "React", "Node.js"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Databases & Data Analysis",
      icon: Database,
      skills: [
        "MySQL",
        "MongoDB",
        "SQL Queries & Joins",
        "Data Cleaning & Preprocessing",
        "Basic Data Visualization",
      ],
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Visual Studio Code", "Eclipse", "Jupyter Notebook"],
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      title: "AI / ML & Automation",
      icon: Brain,
      skills: ["Scikit-learn (Beginner)", "TensorFlow (Beginner)", "LangChain", "Voiceflow", "n8n", "FastAPI"],
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Core Concepts",
      icon: Lightbulb,
      skills: [
        "Object-Oriented Programming",
        "Problem Solving",
        "Debugging & Testing",
        "Version Control",
      ],
      color: "from-indigo-500/20 to-blue-500/20",
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full glow-blob" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group"
            >
              {/* Gradient top border */}
              <div className={`h-1 bg-gradient-to-r ${category.color}`} />
              
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-base font-semibold">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="flex items-center gap-2 text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default Skills;