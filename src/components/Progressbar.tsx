import React, { useRef, useEffect, useState } from "react";
import Section2 from "./Section2";
import Section3 from "./Section3";
import "../styling/Progressbar.css";
import { motion, useScroll, useTransform } from "framer-motion";

type CirclesContainerProps = {
    height: number;
    contentRef: React.RefObject<HTMLDivElement>;
};

const CirclesContainer: React.FC<CirclesContainerProps> = ({ height, contentRef }) => {
    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["start center", "end end"]
    });
    const yTransform = useTransform(scrollYProgress, [0, 1], [`-${height}px`, "0px"]);

   
    const circleRadius = 22.5; 
    const circleDiameter = circleRadius * 2; 
    const numberOfCircles = Math.ceil(height / circleDiameter);
    const circleSpacing = height / numberOfCircles;

    return (
        <div style={{ position: 'relative', width: '45px', height: `${height}px` }}>
            <svg
                width="50"
                height={(height-2)}
                viewBox={`0 0 45 ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height={height}>
                    {Array.from({ length: numberOfCircles }).map((_, i) => (
                        <circle
                            key={i}
                            cx="22.5"
                            cy={i * circleSpacing + circleRadius} 
                            r={circleRadius}
                            fill="#D9D9D9"
                        />
                    ))}
                </mask>
                {Array.from({ length: numberOfCircles }).map((_, i) => (
                    <circle
                        key={i}
                        cx="22.5"
                        cy={i * circleSpacing + circleRadius} 
                        r={circleRadius - 1} 
                        stroke="black"
                        strokeWidth="3"
                    />
                ))}
                <g mask="url(#mask0)">
                    <motion.rect
                        width="45"
                        height={height}
                        y="0"
                        fill="url(#paint0_linear)"
                        style={{ y: yTransform }}
                    />
                </g>
                <defs>
                    <linearGradient id="paint0_linear" x1="22.5" y1="0" x2="22.5" y2={height} gradientUnits="userSpaceOnUse">
                        <stop stopColor="#000736" />
                        <stop offset="1" stopColor="#0924CF" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};


export default function Progressbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.clientHeight*0.8);
        }
    }, []);

    return (
        <div style={{ display: "flex",backgroundColor:"#FF7F50" }}>
            
            <div style={{width:"6rem",display: "flex" ,justifyContent:"center",alignItems:"center"}}   ref={containerRef}>
            <CirclesContainer height={height} contentRef={contentRef} />
            </div>
            <div style={{ width: "100%" }} ref={contentRef}>
  <Section2 />
  <Section3 />
</div>
        </div>
    );
}