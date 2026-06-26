import { Trophy, Code, User, GraduationCap, Cpu } from "lucide-react";

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
              I'm a passionate and driven software engineer with a strong foundation in scalable full-stack development and advanced GenAI. As someone who’s consistently learning and building—from solving 900+ problems as a LeetCode Knight to architecting complex AI-powered systems—I thrive on turning challenging technical problems into intelligent, user-friendly solutions.
            </p>

            <p className="text-muted-foreground">
              Whether it’s orchestrating multi-agent systems with LangGraph, mastering distributed systems, or optimizing cloud infrastructure on AWS, I bring a curious mind, a sharp eye for architecture, and an unshakable work ethic. Every line of code I write is fueled by ambition and a genuine love for tech.
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
        <h4 className="font-semibold text-lg">Full-Stack Engineering</h4>
        <p className="text-muted-foreground">
          Building robust web applications and microservices using Next.js, Node.js, Redis, Kafka, and PostgreSQL with Prisma and Supabase.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Cpu className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">GenAI & LLMs</h4>
        <p className="text-muted-foreground">
          Developing intelligent systems using LangChain, LangGraph, and RAG architectures to integrate advanced Multi-Agent capabilities into real-world tools.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Trophy className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Competitive Programmer</h4>
        <p className="text-muted-foreground">
          Solved 900+ DSA problems. LeetCode Knight (Max Rating: 1879), Codeforces Pupil (Max Rating: 1224), and Global Rank 733 in LC Weekly Contests.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <GraduationCap className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Education & Leadership</h4>
        <p className="text-muted-foreground">
          B.Tech in CSE at NIT Patna (CGPA: 8.33). Core Subjects: Distributed Systems, Cloud Computing. Active contributor as Web Team Member for HackSlash.
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