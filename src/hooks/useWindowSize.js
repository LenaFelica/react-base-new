import { useEffect, useState } from 'react';

const calculateWindowSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    isMobile: width <= 768,
  };
};

export const useWindowSize = () => {
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
