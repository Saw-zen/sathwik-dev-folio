import { BarChart3, CheckCircle2, TrendingUp, Database, FileSearch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataExperience = () => {
  const experiences = [
    { text: "Data cleaning and preprocessing using Python", icon: FileSearch },
    { text: "SQL-based data extraction and analysis", icon: Database },
    { text: "Exploratory Data Analysis (EDA) using Jupyter Notebook", icon: TrendingUp },
    { text: "Interpretation of trends and patterns to support application logic", icon: CheckCircle2 },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full glow-blob" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Data Analysis Experience</h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main card */}
          <Card className="card-hover border-border/50 bg-card/70 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Data Analysis – Academic & Project Work
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-4">
                {experiences.map((exp, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 text-muted-foreground p-3 rounded-lg hover:bg-card/50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <exp.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="pt-1">{exp.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Stats/visual card */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Competencies</h3>
              
              <div className="space-y-4">
                {[
                  { skill: "Python Data Analysis", level: 75 },
                  { skill: "SQL & Database", level: 80 },
                  { skill: "Data Visualization", level: 65 },
                  { skill: "Statistical Analysis", level: 60 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{item.skill}</span>
                      <span className="text-primary">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-xl bg-card/50 border border-border/50">
              <p className="text-sm italic text-muted-foreground">
                "Turning raw data into actionable insights through systematic analysis and visualization."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataExperience;