import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <header className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full glow-blob" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-primary/10 rounded-full glow-blob" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full glow-blob" />
      
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 gradient-fade-top z-10" />
      
      {/* Decorative corner elements */}
      <div className="absolute top-32 right-12 hidden lg:block">
        <div className="w-32 h-32 border border-primary/20 rounded-full" />
        <div className="w-20 h-20 border border-primary/10 rounded-full absolute top-6 left-6" />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute bottom-1/4 right-20 hidden md:block">
        <div className="w-4 h-4 bg-primary/30 rotate-45" />
      </div>
      <div className="absolute top-1/3 right-1/3 hidden md:block">
        <div className="w-2 h-2 bg-primary/50 rounded-full" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 hidden md:block">
        <div className="w-3 h-3 border border-primary/40 rotate-45" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="max-w-2xl">
          {/* Decorative line before title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <p className="text-primary font-medium text-sm sm:text-base tracking-wide uppercase">
              Hello, I'm
            </p>
          </div>
          
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
            <Button asChild size="lg" className="gap-2 px-6 shadow-lg shadow-primary/20">
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

          {/* Stats/highlights */}
          <div className="mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">2+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Languages</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">2026</p>
              <p className="text-sm text-muted-foreground">Graduating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/70 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 gradient-fade-bottom" />
    </header>
  );
};

export default Hero;