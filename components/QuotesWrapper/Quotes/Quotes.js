import { motion, useSpring } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./Quotes.styled";
import { MdChangeCircle } from "react-icons/md";

const spring = {
  type: "spring",
  stiffness: 60,
  damping: 10,
};

export default function Quotes({ quote, refreshQuote, handleCounter }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped((prevState) => {
      if (!prevState) {
        refreshQuote();
        handleCounter();
      }
      return !prevState;
    });
  }

  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
  const ref = useRef(null);

  function handleMouseMove(event) {
    const element = ref.current;
    const elementRect = element.getBoundingClientRect();
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;
    const elementCenterX = elementWidth / 2;
    const elementCenterY = elementHeight / 2;
    const mouseX = event.clientY - elementRect.y - elementCenterY;
    const mouseY = event.clientX - elementRect.x - elementCenterX;
    const degreeX = (mouseX / elementWidth) * 20;
    const degreeY = (mouseY / elementHeight) * 20;
    setRotateXaxis(degreeX);
    setRotateYaxis(degreeY);
  }

  function handleMouseEnd() {
    setRotateXaxis(0);
    setRotateYaxis(0);
  }

  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);

  useEffect(() => {
    dx.set(-rotateXaxis);
    dy.set(rotateYaxis);
  }, [rotateXaxis, rotateYaxis]);

  function getFontSize(quote) {
    let baseSize = 40; // base font size in px
    let maxLength = 40; // max characters count for base size
    if (quote.length > maxLength) {
      let diff = quote.length - maxLength;
      let sizeDecrease = Math.floor(diff / 4); // decrease font size by 1px for each 4 characters over maxLength
      return Math.max(baseSize - sizeDecrease, 16); // don't go below 16px
    }

    return baseSize;
  }

  return (
    <motion.div
      onClick={handleClick}
      transition={spring}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        width: "320px",
        height: "340px",
      }}
    >
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseEnd}
        transition={spring}
        style={{
          width: "100%",
          height: "100%",
          rotateX: dx,
          rotateY: dy,
        }}
      >
        <div
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            animate={{
              rotateY: isFlipped ? -180 : 0,
            }}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 0 : 1,
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          >
            <Styled.QuoteCard variant="Front">
              <MdChangeCircle style={{ fontSize: "2.5rem" }} />
              click me
            </Styled.QuoteCard>
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{
              rotateY: isFlipped ? 0 : 180,
            }}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 1 : 0,
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          >
            <Styled.QuoteCard variant="Back">
              <Styled.Quote
                style={{ fontSize: `${getFontSize(quote.quote)}px` }}
              >
                {quote.quote}
              </Styled.Quote>
              <p>{quote.author}</p>
            </Styled.QuoteCard>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
