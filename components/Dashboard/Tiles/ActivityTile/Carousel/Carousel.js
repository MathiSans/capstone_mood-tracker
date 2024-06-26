import React, { useState, useEffect } from "react";
import * as Styled from "./Carousel.styled";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [children.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <AnimatePresence>
        {children.map(
          (child, index) =>
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {child}
              </motion.div>
            )
        )}
      </AnimatePresence>
      <Styled.IndicatorContainer>
        {children.map((_, index) => (
          <Styled.Indicator
            onClick={() => handleIndicatorClick(index)}
            key={index}
            $active={index === currentIndex}
          />
        ))}
      </Styled.IndicatorContainer>
    </>
  );
}
