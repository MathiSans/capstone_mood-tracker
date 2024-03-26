import { AnimatePresence, motion, useSpring } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./Quotes.styled";
import { MdChangeCircle } from "react-icons/md";

// Learn more: https://www.framer.com/docs/guides/overrides/

//Spring animation parameters
const spring = {
  type: "spring",
  stiffness: 60,
  damping: 10,
};

/**
 * 3D Flip
 * Created By Joshua Guo
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */

export default function WithClick({ quotes }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [quoteState, setQuoteState] = useState({});
  const [nextQuote, setNextQuote] = useState(0);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
    if (!isFlipped) {
      setNextQuote((currQuote) => currQuote + 1);
      handleRandomQuote();
    }
  };

  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const element = ref.current;
    const elementRect = element.getBoundingClientRect();
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;
    const elementCenterX = elementWidth / 2;
    const elementCenterY = elementHeight / 2;
    const mouseX = event.clientY - elementRect.y - elementCenterY;
    const mouseY = event.clientX - elementRect.x - elementCenterX;
    const degreeX = (mouseX / elementWidth) * 20; //The number is the rotation factor
    const degreeY = (mouseY / elementHeight) * 20; //The number is the rotation factor
    setRotateXaxis(degreeX);
    setRotateYaxis(degreeY);
  };

  const handleMouseEnd = () => {
    setRotateXaxis(0);
    setRotateYaxis(0);
  };

  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);

  useEffect(() => {
    dx.set(-rotateXaxis);
    dy.set(rotateYaxis);
  }, [rotateXaxis, rotateYaxis]);

  function handleRandomQuote() {
    if (!quotes || !Array.isArray(quotes) || quotes.length === 0) {
      return <p>No quotes available</p>;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuoteState(randomQuote);
    setNextQuote(quotes);
  }
  // useEffect(() => {
  //   handleRandomQuote();
  // });
  // useEffect(() => {
  //   handleRandomQuote();
  // }, [nextQuote]);

  return (
    <motion.div
      onClick={handleClick}
      transition={spring}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        width: "300px",
        height: "440px",
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
              <Styled.Quote>{quoteState.text}</Styled.Quote>
              <p>{quoteState.author}</p>
            </Styled.QuoteCard>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// import styled from "styled-components";
// import { useEffect, useState } from "react";
// import * as Styled from "./Quotes.styled";
// import NavButton from "../NavButton/NavButton";

// export default function Quotes({ quotes }) {
//   const [quoteState, setQuoteState] = useState({});
//   const [nextQuote, setNextQuote] = useState(0);

//   function handleRandomQuote() {
//     if (!quotes || !Array.isArray(quotes) || quotes.length === 0) {
//       return <p>No quotes available</p>;
//     }
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     setQuoteState(randomQuote);
//     setNextQuote(quotes);
//   }
//   useEffect(() => {
//     handleRandomQuote();
//   });
//   useEffect(() => {
//     handleRandomQuote();
//   }, [nextQuote]);

//   return (
//     <>
//       <NavButton
//         handleClick={() => {
//           setNextQuote((currQuote) => currQuote + 1);
//         }}
//       >
//         new quote
//       </NavButton>
//       <Styled.QuoteCard>
//         <Styled.Quote>{quoteState.text}</Styled.Quote>
//         <p>{quoteState.author}</p>
//       </Styled.QuoteCard>
//     </>
//   );
// }
