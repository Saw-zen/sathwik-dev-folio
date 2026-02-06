import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataExperience = () => {
  const experiences = [
    "Performed data cleaning and preprocessing using Python.",
    "Wrote SQL queries to extract and analyze structured data.",
    "Conducted basic exploratory data analysis (EDA) using Jupyter Notebook.",
    "Interpreted data trends to support application logic and technical decision-making.",
  ];

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Data Analysis Experience</h2>
        
        <Card className="card-hover border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">
                Data Analysis – Academic & Project Work
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3">
              {experiences.map((exp, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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