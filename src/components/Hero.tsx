import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0", "100vh"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0", "50vh"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0", "20vh"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0", "150vh"]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: " 13vh",
        
      }}
    >
      
      <motion.h1
        style={{
          y: textY,
          fontWeight: "bold",
          color: "black",
          position: "relative",
          zIndex: 10,
          fontSize: "3vmax",
          maxWidth: "80%",
          textAlign:"center"
        }}
      >
        This is an example for the parallax animation
      </motion.h1>

      <motion.div
        style={{
          y: backgroundY1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundImage: `url("/src/assets/fullimage.jpg")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      <motion.div
        style={{
          y: backgroundY2,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 20,
          backgroundImage: `url("/src/assets/Subtract2.png")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      <motion.div
        style={{
          y: backgroundY3,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 30,
          backgroundImage: `url("/src/assets/Subtract.png")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}