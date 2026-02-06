import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm sm:text-base mb-4 animate-fade-in">
            Hello, I'm
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sathwik R
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            BCA Student | Aspiring Software Developer | AI & Data Analysis Enthusiast
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Entry-level software developer with hands-on experience in programming, data analysis, 
            and web development. Skilled in building practical applications using Java, Python, C#, 
            SQL, and modern development tools. Actively seeking opportunities to apply analytical 
            thinking and software engineering skills to real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                <ArrowDown className="w-4 h-4" />
                View Projects
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </header>
  );
};

export default Hero;