import { useEffect, useState } from "react";

// Create a function getWindowDimension to get width and height
function getWindowDimension() {
  // Destructuring of window object
  const { innerWidth: width, innerHeight: height } = window;

  // return an object width and height
  return { width, height };
}

// Create customHook useWindowDimension
export default function useWindowDimension() {
  // Initialize state variable
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());

  //use useEffect to mount for every render
  useEffect(() => {
    // Create a handleResize function
    function handleResize() {
      setWindowDimension(getWindowDimension());
    }

    // add and event listener
    window.addEventListener('resize', handleResize);

    // clean up the event
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimension;
}


