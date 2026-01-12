import { useEffect, useRef } from "react";
import { animate, splitText, stagger } from "animejs";
import "./home.css"

const SplitText = ({ 
  text, 
  className = "", 
  duration = 800, 
  delay = 50, 
  easing = "out(3)"
}) => {

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // SPLIT THE TEXT
    const split = splitText(ref.current, {
      chars: { wrap: "clip" }   // chars animation wrapper
    });

    // ANIMATE THE LETTERS
    animate(split.chars, {
      opacity: [0, 1],
      y: ["100%", "0%"],
      duration,
      easing,
      delay: stagger(delay),
    });

    // Auto revert on unmount
    return () => split.revert();
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  );
};

export default SplitText;
