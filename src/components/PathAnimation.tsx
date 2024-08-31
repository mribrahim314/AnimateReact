import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PathAnimation = () => {
  const contRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: contRef,
    offset: ["start 20%", "end 50%"],
  });

  useEffect(() => {
    if (pathRef.current && pathLength === 0) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef, pathLength]);
  

  const pathProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0, pathLength * 0.2, pathLength * 0.4, pathLength]
  );

  const x = useTransform(pathProgress, (progress) => {
    if (pathRef.current) {
      const point = pathRef.current.getPointAtLength(progress);
      return point.x;
    }
    return 0;
  });

  const y = useTransform(pathProgress, (progress) => {
    if (pathRef.current) {
      const point = pathRef.current.getPointAtLength(progress);
      return point.y;
    }
    return 0;
  });

  return (
    <div ref={contRef} style={{ width: "100%", minHeight: "100vh" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 643 1092"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-0 left-0"
      >
        <path
          ref={pathRef}
          id="flightPath"
          d="M104.526 1C70 150 30 400 140 500C250 600 450 650 520 680C580 700 670 750 630 850C580 960 180 980 140 980C100 980 30 980 10 940C-10 900 40 840 80 860C120 880 110 870 160 920C200 960 140 1040 110 1080C80 1080 20 1090 10 1080"
          stroke="black"
          fill="transparent"
        />

        <motion.circle
          cx="0"
          cy="0"
          r="15"
          fill="blueviolet"
          style={{
            x,
            y,
          }}
        />

        <foreignObject
          width="400"
          height="600"
          x={"30%"}
          y={"20%"}
        >
          <div
            style={{
              color: "black",
              fontSize: "0.8rem",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#800080",
            }}
          >
            <p>
              This code creates a visually engaging effect on the webpage, where a small circle travels along a winding path as the user scrolls. The circle’s movement is smooth and fluid, making it appear as though it’s tracing a journey across the page. This effect adds a dynamic element to the webpage, making it feel interactive and responsive to the user’s actions. As the circle progresses along the path, it draws the viewer’s attention and creates a sense of movement and direction, encouraging the user to continue scrolling to see where the path leads.
            </p>
          </div>
        </foreignObject>
        <foreignObject
          width="400"
          height="600"
          x={"20%"}
          y={"66%"}
        >
          <div
            style={{
              color: "black",
              fontSize: "0.8rem",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#800080",
            }}
          >
            <p>
              While the circle moves along the path, a text box is positioned at a fixed point within the design. Unlike the moving circle, this text box remains stationary, serving as a focal point within the visual layout. The static placement of the text box provides a balance to the animation, offering a clear point of reference amidst the movement. This combination of a moving element with a fixed text box creates a visually appealing contrast that highlights the key information within the text while still allowing the animation to add a dynamic, engaging layer to the overall design.
            </p>
          </div>
        </foreignObject>

        <text fontSize="24" fill="black">
          <textPath href="#flightPath" startOffset="27%">
            this is the next section
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default PathAnimation;
