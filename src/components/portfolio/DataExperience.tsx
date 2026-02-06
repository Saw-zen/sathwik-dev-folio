import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataExperience = () => {
  const experiences = [
    "Data cleaning and preprocessing using Python",
    "SQL-based data extraction and analysis",
    "Exploratory Data Analysis (EDA) using Jupyter Notebook",
    "Interpretation of trends and patterns to support application logic",
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Data Analysis Experience</h2>
        
        <Card className="card-hover border-border/50 bg-card/50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">
                Data Analysis – Academic & Project Work
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3">
              {experiences.map((exp, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-5 h-5 rounded-full border-2 border-primary/40 flex items-center justify-center text-xs text-primary font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  {exp}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DataExperience;
