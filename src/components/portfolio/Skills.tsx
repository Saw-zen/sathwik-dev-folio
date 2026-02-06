import { Code2, Globe, Database, Wrench, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "C#", "Python", "JavaScript"],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS3", "React", "Node.js"],
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
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Visual Studio Code", "Eclipse", "Jupyter Notebook"],
    },
    {
      title: "AI / ML",
      icon: Brain,
      skills: ["Scikit-learn (Beginner)", "TensorFlow (Beginner)"],
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
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-base font-semibold">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
