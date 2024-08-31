import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const letterVariants = {
  initial: (direction:string) => ({
    opacity: 0,
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
    },
  },
};

const directions = ['left', 'right', 'top', 'bottom'];

const getDirection = (index:number) => directions[index % directions.length];

export default function End() {
  const { ref, inView } = useInView();

  return (
    <div
      
      style={{
        backgroundColor: "lightgray",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        gap: "0.5rem",
      }}
    ><div ref={ref} style={{        display: "flex",
      alignItems: "center",
      justifyContent: "center",height:"60%"}}>
      {["T", "H", "E", "E", "N", "D"].map((letter, index) => (
        <motion.p
          key={index}
          custom={getDirection(index)}
          variants={letterVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {letter}
        </motion.p>
      ))}
    </div></div>
  );
}
