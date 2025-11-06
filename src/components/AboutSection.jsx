import { useEffect, useState, useRef } from "react";
import Lanyard from "./Lanyard";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting) {
          setIsVisible(true); // only set true once
        }
        setIsVisible1(entry.isIntersecting);
      },
      {
        root: null,       // viewport
        threshold: 0.1,   // trigger when 10% of section is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div>
      {isVisible && (
    <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-auto z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible1 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          className="w-full h-full"
        />
      </motion.div>)}
    <section id="about" ref={aboutRef} className="py-24 px-4 relative overflow-visible">
     
      <div className="container mx-auto max-w-5xl overflow-visible">
        

        <motion.div initial={{ x: "-100%", opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true}}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-visible">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
            <h3 className="text-2xl font-semibold">Passionate Software Engineer</h3>
            <p className="text-muted-foreground">
              What excites me most about software engineering is the opportunity to make an impact. 
              Whether that's through improving user experiences, solving challenging problems, 
              or collaborating with others to bring ambitious ideas to life.
            </p>
            <p className="text-muted-foreground">
              I’m eager to continue learning from the best and contributing to projects that turn technology into something meaningful for others.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div> */}
          </div>

         {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} className="w-full h-full max-h-[500px] flex justify-center items-center overflow-visible"/> */}
        </motion.div>
      </div>
    </section>
    </div>
  );
};
