import { FolderGit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Assignment Tracking Software",
      status: "In Progress",
      description: [
        "Developed a system to track student submissions and prevent duplicate assignments using handwriting recognition techniques.",
        "Designed relational database structures using MySQL.",
        "Implemented backend logic using C# and .NET.",
        "Applied analytical reasoning to identify duplicate submission patterns.",
        "Focused on maintainable, scalable, and clean code practices.",
      ],
      technologies: ["C#", ".NET", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-5">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border/50 bg-card/50">
              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                  {project.status && (
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5">
                <ul className="space-y-2.5">
                  {project.description.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag">
                        {tech}
                      </span>
                    ))}
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

export default Projects;
