import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [widthState, setWidthState] = useState(false);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width < 700) {
      return setWidthState(true);
    } else {
      return setWidthState(false);
    }
  }, [setWidthState, width]);
  return widthState;
};

export default useWindowSize;
