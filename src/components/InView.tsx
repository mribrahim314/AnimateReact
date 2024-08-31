import { motion, Variants } from "framer-motion";
import "../styling/InView.css";

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function InView() {
  return (
    <div 
      style={{ 
        width: "100%", 
        height: "100vh", 
        backgroundColor: "#8DDEFD", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
      }}
    >
      
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.7 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end" }} 
      >
        <svg 

          className="splash" 
          viewBox="0 0 376 191" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 72.8103C0 65.4691 5.31326 59.2066 12.5563 58.0107L358.556 0.880243C367.693 -0.628301 376 6.41992 376 15.6799V176C376 184.284 369.284 191 361 191H15C6.71573 191 0 184.284 0 176V72.8103Z" 
            fill="url(#paint0_linear_1_2)"
          />
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="376" y1="93.9808" x2="-2.0068e-05" y2="95.0088" gradientUnits="userSpaceOnUse">
              <stop stopColor="#220055"/>
              <stop offset="1" stopColor="#224455"/>
            </linearGradient>
          </defs>
        </svg>
        <motion.div className="card" variants={cardVariants}>
          <p >
            this is for whileinview example
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
