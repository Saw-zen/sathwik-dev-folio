const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            I am a Bachelor of Computer Applications (BCA) student at Kuvempu University, 
            expected to graduate in 2026. I have a strong foundation in software development, 
            object-oriented programming, database management, and data analysis.
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            I have experience working with Python, Java, C#, JavaScript, SQL, and web technologies, 
            and I enjoy using data-driven approaches to analyze problems and develop efficient, 
            scalable solutions. My career interests include software engineering, AI/ML, and data analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;