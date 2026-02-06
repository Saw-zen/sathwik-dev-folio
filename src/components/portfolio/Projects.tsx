import { FolderGit2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Assignment Tracking Software",
      status: "In Progress",
      description: [
        "Developing a system to track student submissions and prevent duplicate assignments using handwriting recognition techniques.",
        "Designed and managed relational databases using MySQL.",
        "Developed backend logic using C# and .NET.",
        "Applied analytical thinking to identify duplicate submission patterns.",
        "Focused on clean, maintainable, and scalable code.",
      ],
      technologies: ["C#", ".NET", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border/50">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                  {project.status && (
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-2">
                  <p className="text-sm font-medium text-foreground mb-2">
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