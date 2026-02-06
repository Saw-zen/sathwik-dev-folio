import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <header className="min-h-screen flex items-center relative">
      <div className="section-container w-full">
        <div className="max-w-2xl">
          <p className="text-primary font-medium text-sm sm:text-base mb-4 tracking-wide uppercase">
            Hello, I'm
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Sathwik R
          </h1>
          
          <h2 className="text-lg sm:text-xl text-muted-foreground font-medium mb-6">
            BCA Student | Aspiring Software Developer | AI & Data Analysis
          </h2>
          
          <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-10 font-light">
            I build data-driven software applications using Java, Python, C#, and SQL.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 px-6">
              <a href="#projects">
                <ArrowDown className="w-4 h-4" />
                View Projects
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2 px-6">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
