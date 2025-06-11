import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-25 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate and driven web developer with a strong foundation in full-stack development and a growing expertise in AI and modern technologies like React.js, Node.js, and MongoDB. As someone who’s consistently learning and building—from competitive coding on LeetCode and CodeChef to real-world projects like an AI-powered image generator—I thrive on turning complex ideas into smooth, user-friendly experiences.
            </p>

            <p className="text-muted-foreground">
              Whether it’s exploring GenAI, diving into system-level concepts like OS and DBMS, or optimizing DSA skills in C++ for placements, I bring a curious mind, a sharp eye for detail, and an unshakable work ethic. Every line of code I write is fueled by ambition and a genuine love for tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
  href="/RESUME_2306012_JATIN_AVTANI_CSE.pdf"
  download
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Full-Stack Development</h4>
        <p className="text-muted-foreground">
          Building responsive, real-world web applications using React.js, Node.js, Express, and MongoDB with clean and scalable code.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">GenAI Enthusiast</h4>
        <p className="text-muted-foreground">
          Exploring Generative AI as a beginner through hands-on projects, learning to integrate APIs like ClipDrop into web apps to build creative tools.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">DSA Learner</h4>
        <p className="text-muted-foreground">
          Practicing over 170+ problems on LeetCode and preparing for placements by mastering core data structures, algorithms, and system concepts like OS and DBMS.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};