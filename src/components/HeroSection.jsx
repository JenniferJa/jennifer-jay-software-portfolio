import { ArrowDown, Github, Linkedin, Rocket } from "lucide-react";
import { FloatingBlocks } from "./FloatingBlocks"; 
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-visible"
    >
      <FloatingBlocks />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jennifer
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jay
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Always exploring, always building. <br></br>Ready for the next challenge worth solving!
          </p>
          <div className="flex justify-center gap-4 mt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://devpost.com/jenniferjaystar2"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition-all"
            >
              <Rocket className="w-5 h-5" />
              <span className="absolute -bottom-8 -translate-x-1/2 whitespace-nowrap
              rounded-md bg-white text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 
              transition-opacity pointer-events-none">
              DevPost
            </span>
            </a>
            <a
              href="https://github.com/JenniferJa"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition-all"
            >
              <Github className="w-5 h-5"/>
              <span className="absolute -bottom-8 -translate-x-1/2 whitespace-nowrap
              rounded-md bg-white text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 
              transition-opacity pointer-events-none">
              GitHub
            </span>
            </a>

            <a
              href="https://www.linkedin.com/in/jennifer-jay1"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="absolute -bottom-8 -translate-x-1/2 whitespace-nowrap
              rounded-md bg-white text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 
              transition-opacity pointer-events-none">
              Linkedin
            </span>
            </a>

            
          </div>

        </div>
      </div>

      <a href="#about" className="z-10">
        <div className="hover:scale-150 transition-transform duration-300 ease-in-out absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Discover More </span>
        <ArrowDown className="h-5 w-5 text-primary " />
      </div>
              </a>
    </section>
  );
};