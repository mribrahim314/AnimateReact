
import { motion } from 'framer-motion';
import '../styling/AnimatedBackground.css'

export const AnimatedBackground = () => (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="background">
          <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    
  >
    <h1>this background is animated</h1>
  </motion.div>
      <motion.div
    whileHover={{ rotateY: 15, rotateX: 15 }}
    className="card-3d"
  >
    <h1>this is an example how a 3d effect for hover</h1>
  </motion.div>

  </motion.div>
    
  );
  

  