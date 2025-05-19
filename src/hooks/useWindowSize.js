import { useEffect, useState } from 'react';

// export const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     isMobile: window.innerWidth <= 768,
//   });

//   const handleResize = () => {
//     setWindowSize({
//       width: window.innerWidth,
//       isMobile: window.innerWidth <= 768,
//     });
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return windowSize;
// };
export const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const isMobile = width <= 768;
  const isTablet = width <= 1024;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height, isMobile, isTablet };
};
