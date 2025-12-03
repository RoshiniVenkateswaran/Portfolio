import { useState, useEffect } from 'react';
import StoryScenes from '../components/StoryScenes';
import Footer from '../components/Footer';
import ScrollNarrator from '../components/ScrollNarrator';

const Story = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark">
      <ScrollNarrator scrollProgress={scrollProgress} />
      <StoryScenes />
      <Footer />
    </div>
  );
};

export default Story;
