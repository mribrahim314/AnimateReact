import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Hero from './components/Hero';
import Progressbar from './components/Progressbar';
import InView from './components/InView';
import PathAnimation from './components/PathAnimation';
import { AnimatedBackground } from './components/AnimatedBackground';
import Timeline from './components/Timeline';
import End from './components/End';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div>
      <Hero />
      <InView />
      <Progressbar />
      <PathAnimation />
      <AnimatedBackground />
      <Timeline />
      <End />
    </div>
  );
};

export default App;