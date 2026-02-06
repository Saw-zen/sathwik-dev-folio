import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import DataExperience from "@/components/portfolio/DataExperience";
import Certifications from "@/components/portfolio/Certifications";
import Extracurricular from "@/components/portfolio/Extracurricular";
import Languages from "@/components/portfolio/Languages";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <DataExperience />
        <Certifications />
        <Extracurricular />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;