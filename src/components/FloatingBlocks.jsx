import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const FloatingBlocks = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const blocks = Array.from({ length: 12 });
  // Helper function to generate positions that avoid center
  const getEdgeBiasedPosition = () => {
    const random = Math.random();
    // Push values toward 0% or 100% (edges)
    if (random < 0.5) {
      return Math.random() * 30; // 0-30% (left/top edge)
    } else {
      return 70 + Math.random() * 30; // 70-100% (right/bottom edge)
    }
  };
  return (
    <div className="absolute inset-0 overflow-visible" style={{ perspective: "1000px" }}>
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl opacity-80"
          initial={{ scale: 0, y: 0 }}
          animate={{ 
            scale: 1, 
            y: [0, -20, 0],
          }}
          whileHover={{
            scale: 1.6,
            rotateZ: 6,
            opacity: 0,
            transition: { duration: 0.3 } // faster hover transition
          }}
          transition={{ 
            duration: 4 + i * 0.3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            rotateX,
            rotateY,
            width: `${30 + Math.random() * 80}px`,
            height: `${30 + Math.random() * 80}px`,
            background: `hsl(${i * 30}, 80%, 70%)`,
            top: `${getEdgeBiasedPosition()}%`,
            left: `${getEdgeBiasedPosition()}%`,
          }}
        />
      ))}
    </div>
  );
};