
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const draw = {
  hidden: { pathLength: 0, opacity: 0},
  visible: (i: number) => {
    const delay = 0.5 + i * 0.4;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.05 },
      },
    };
  },
  
};
const animateMask = {
    hidden: { x: "-100%", y: "100%" },
    visible: { x: "0%", y: "0%"},
  };

interface LoadingOverlayProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingOverlayProps> = ({ onLoadingComplete}) => {
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowExit(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {!showExit && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            zIndex: 9999,
          }}
          exit={{ opacity: 0,scale:0 }}
          transition={{ duration: 1 }}
        >
          <motion.svg
            style={{ width: "30%" }}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-50 -50 1180 1180"
            xmlSpace="preserve"
            initial={{ scale: 1.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2 }}
          >
         <defs>
          {/* Gradient Mask Definition */}
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              style={{rotate:50}}
              variants={animateMask}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2,delay:2.1, ease: "easeInOut" }}
            />

          </mask>
        </defs>
        <defs>
          {/* Gradient Mask Definition */}
          <mask id="mask2" x="0" y="0" width="100%" height="100%">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="#b8b4b4"
              style={{rotate:50}}
              variants={animateMask}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2,delay:2, ease: "easeInOut" }}
            />

          </mask>
        </defs>
        <style type="text/css">
          {`.st0{fill:#1F87BD;}`}
        </style>
        <g>
        <motion.path
      
  variants={draw}
  initial="hidden"
  animate="visible"
  custom={0}
  fill="none"
  stroke="#e0e0e0"
  strokeWidth="20"
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M627.11,700.41L578.47,780c-2.91,4.76-3.09,10.71-0.46,15.64l44.08,82.73c2.74,5.14,8.09,8.35,13.92,8.35h303.42c12.18,0,19.76-13.21,13.62-23.72L654.82,352.51c-6.08-10.41-21.13-10.42-27.22-0.01L384.58,767.53c-2.79,4.77-7.88,7.73-13.41,7.8l-34.48,0.44c-12.27,0.16-20.01-13.15-13.81-23.74l177.66-303.18c2.9-4.94,2.88-11.06-0.03-15.99l-47.57-80.54c-6.12-10.36-21.11-10.33-27.19,0.06l-298.8,510.6c-6.15,10.51,1.43,23.73,13.61,23.73h295.08c5.57,0,10.72-2.94,13.56-7.73l178.05-300.3c6.2-10.45,21.39-10.26,27.32,0.34l97.41,173.94c5.73,10.22-1.3,22.9-13.01,23.46l-26.95,1.28c-5.69,0.27-11.08-2.54-14.11-7.37l-44.01-70.1C647.7,690.33,633.22,690.42,627.11,700.41z"
/>

<motion.path

  variants={draw}
  initial="hidden"
  animate="visible"
  custom={1}
  fill="none"
  stroke="#b8b4b4"
  strokeWidth="20"

  strokeLinecap="round"
  strokeLinejoin="round"
  d="M627.11,700.41L578.47,780c-2.91,4.76-3.09,10.71-0.46,15.64l44.08,82.73c2.74,5.14,8.09,8.35,13.92,8.35h303.42c12.18,0,19.76-13.21,13.62-23.72L654.82,352.51c-6.08-10.41-21.13-10.42-27.22-0.01L384.58,767.53c-2.79,4.77-7.88,7.73-13.41,7.8l-34.48,0.44c-12.27,0.16-20.01-13.15-13.81-23.74l177.66-303.18c2.9-4.94,2.88-11.06-0.03-15.99l-47.57-80.54c-6.12-10.36-21.11-10.33-27.19,0.06l-298.8,510.6c-6.15,10.51,1.43,23.73,13.61,23.73h295.08c5.57,0,10.72-2.94,13.56-7.73l178.05-300.3c6.2-10.45,21.39-10.26,27.32,0.34l97.41,173.94c5.73,10.22-1.3,22.9-13.01,23.46l-26.95,1.28c-5.69,0.27-11.08-2.54-14.11-7.37l-44.01-70.1C647.7,690.33,633.22,690.42,627.11,700.41z"
/>

<motion.path

  variants={draw}
  initial="hidden"
  animate="visible"
  custom={2}
  fill="none"
  stroke="black"
  strokeWidth="20"
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M627.11,700.41L578.47,780c-2.91,4.76-3.09,10.71-0.46,15.64l44.08,82.73c2.74,5.14,8.09,8.35,13.92,8.35h303.42c12.18,0,19.76-13.21,13.62-23.72L654.82,352.51c-6.08-10.41-21.13-10.42-27.22-0.01L384.58,767.53c-2.79,4.77-7.88,7.73-13.41,7.8l-34.48,0.44c-12.27,0.16-20.01-13.15-13.81-23.74l177.66-303.18c2.9-4.94,2.88-11.06-0.03-15.99l-47.57-80.54c-6.12-10.36-21.11-10.33-27.19,0.06l-298.8,510.6c-6.15,10.51,1.43,23.73,13.61,23.73h295.08c5.57,0,10.72-2.94,13.56-7.73l178.05-300.3c6.2-10.45,21.39-10.26,27.32,0.34l97.41,173.94c5.73,10.22-1.3,22.9-13.01,23.46l-26.95,1.28c-5.69,0.27-11.08-2.54-14.11-7.37l-44.01-70.1C647.7,690.33,633.22,690.42,627.11,700.41z"
/>



          <motion.path
            initial={{ opacity: 0, y: "-20%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration:0.5,delay:3,ease:"easeInOut"}}
            
            className="st0"
            d="M479.29,282.79l45.86,79.14c6.62,11.43,23.12,11.43,29.74,0l45.82-79.08c3.4-5.87,3.03-13.19-0.95-18.69l-46.13-63.76c-6.89-9.52-21.08-9.48-27.91,0.08l-45.54,63.7C476.25,269.67,475.91,276.95,479.29,282.79z"
          />
          <motion.path

            d="M627.11,700.41L578.47,780c-2.91,4.76-3.09,10.71-0.46,15.64l44.08,82.73c2.74,5.14,8.09,8.35,13.92,8.35h303.42c12.18,0,19.76-13.21,13.62-23.72L654.82,352.51c-6.08-10.41-21.13-10.42-27.22-0.01L384.58,767.53c-2.79,4.77-7.88,7.73-13.41,7.8l-34.48,0.44c-12.27,0.16-20.01-13.15-13.81-23.74l177.66-303.18c2.9-4.94,2.88-11.06-0.03-15.99l-47.57-80.54c-6.12-10.36-21.11-10.33-27.19,0.06l-298.8,510.6c-6.15,10.51,1.43,23.73,13.61,23.73h295.08c5.57,0,10.72-2.94,13.56-7.73l178.05-300.3c6.2-10.45,21.39-10.26,27.32,0.34l97.41,173.94c5.73,10.22-1.3,22.9-13.01,23.46l-26.95,1.28c-5.69,0.27-11.08-2.54-14.11-7.37l-44.01-70.1C647.7,690.33,633.22,690.42,627.11,700.41z"
            mask="url(#mask2)"
          />
                    <motion.path

    d="M627.11,700.41L578.47,780c-2.91,4.76-3.09,10.71-0.46,15.64l44.08,82.73c2.74,5.14,8.09,8.35,13.92,8.35h303.42c12.18,0,19.76-13.21,13.62-23.72L654.82,352.51c-6.08-10.41-21.13-10.42-27.22-0.01L384.58,767.53c-2.79,4.77-7.88,7.73-13.41,7.8l-34.48,0.44c-12.27,0.16-20.01-13.15-13.81-23.74l177.66-303.18c2.9-4.94,2.88-11.06-0.03-15.99l-47.57-80.54c-6.12-10.36-21.11-10.33-27.19,0.06l-298.8,510.6c-6.15,10.51,1.43,23.73,13.61,23.73h295.08c5.57,0,10.72-2.94,13.56-7.73l178.05-300.3c6.2-10.45,21.39-10.26,27.32,0.34l97.41,173.94c5.73,10.22-1.3,22.9-13.01,23.46l-26.95,1.28c-5.69,0.27-11.08-2.54-14.11-7.37l-44.01-70.1C647.7,690.33,633.22,690.42,627.11,700.41z"
            mask="url(#mask)"
/>
        </g>
        </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;