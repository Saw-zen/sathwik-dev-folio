import { FolderGit2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "RAVE – Personal Assistant Bot",
      status: "Completed",
      description: [
        "Built an AI-powered personal assistant that sends daily WhatsApp messages to guide through morning to-do lists.",
        "Integrated with WhatsApp Business API for automated reminder and calendar notifications.",
        "Developed conversational flows using Voiceflow for natural user interactions.",
        "Implemented backend automation using FastAPI and n8n for agentic AI workflows.",
        "Applied LangChain for enhanced natural language processing and task management.",
      ],
      technologies: ["Voiceflow", "WhatsApp API", "FastAPI", "LangChain", "n8n"],
    },
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
    <section id="projects" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full glow-blob" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full glow-blob" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="w-20 h-20 border border-primary/10 rounded-lg rotate-12" />
      </div>
      <div className="absolute bottom-32 left-16 hidden lg:block">
        <div className="w-12 h-12 border border-primary/15 rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover border-border/50 bg-card/70 backdrop-blur-sm overflow-hidden"
            >
              {/* Status indicator bar */}
              <div className={`h-1 ${project.status === 'Completed' ? 'bg-green-500/50' : 'bg-amber-500/50'}`} />
              
              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}
                  >
                    {project.status}
                  </Badge>
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
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-primary" />
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects coming indicator */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-primary/30 bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
            <span className="text-sm text-muted-foreground">More projects coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;