import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const calculateWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      width,
      height,
      isMobile: width <= 768,
    };
  };

  const [windowSize, setWindowSize] = useState(calculateWindowSize);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(calculateWindowSize());
    };

    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return windowSize;
};
