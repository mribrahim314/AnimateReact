import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../styling/Timeline.css";

interface TimelineItemProps {
  content: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ content }) => {
  const { ref, inView } = useInView();

  return (
    <motion.div
    style={{width:"100%"}}
      ref={ref}
      className={`timeline-item `}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {content}
    </motion.div>
  );
};

const Timeline: React.FC = () => (
  <div className="timeline-container">
    <div className="timeline">
      <TimelineItem content="this is an interactive timelines example! " />
      <TimelineItem content="it is a scroll-revealing timeline" />
      <TimelineItem content="If your site includes timelines or infographics, animate the elements so they dynamically reveal themselves as the user scrolls." />

    </div>
  </div>
);

export default Timeline;
