import { useState, useEffect } from "react";
import Guide from "../Guide/Guide";
import { AnimatedText } from "./GuideAnimator.styled";

export default function GuideAnimator({ guides }) {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComponentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedText>
      <Guide text={guides[currentComponentIndex]} />
    </AnimatedText>
  );
}
