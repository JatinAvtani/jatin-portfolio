import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jatin
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Avtani
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I architect scalable web applications and advanced AI systems.
            Specializing in full-stack engineering and GenAI, I build high-performance
            solutions that are both robust and intelligent.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1aWscyyNIM9GAF5g7Z93NyqrvtO81IBqV/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="cosmic-button flex items-center gap-2 bg-secondary/80 text-foreground hover:bg-secondary shadow-none"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};