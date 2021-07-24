import { useEffect, useState } from "react";


export function usePosition(el) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({});
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const rect = el.current && el.current.getBoundingClientRect();
      setWindowSize({
        // width: window.innerWidth,
        // height: window.innerHeight,
        ...(rect
          ? {
              overflowX: rect.left < 0 || rect.right > window.innerWidth,
              overflowY: rect.top < 0 || rect.bottom > window.innerHeight,
            }
          : {}),
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [el]); // Empty array ensures that effect is only run on mount
  return windowSize;
}
