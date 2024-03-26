import * as Styled from "./SmileTrainer.styled";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SmileTrainer({ smileThreshold, facesDetected }) {
  const [counter, setCounter] = useState(10);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (smileThreshold > 0.5 && counter > 0) {
        setCounter((prevCounter) => prevCounter - 0.1);
      } else if (counter <= 0) {
        setDone(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <>
      <motion.div
        animate={
          done
            ? { scale: 1.2 }
            : smileThreshold > 0.5
            ? { scale: 1.2 }
            : { scale: 1 }
        }
        transition={{ duration: 10 }}
      >
        <Styled.Circle
          $facesDetected={facesDetected}
          $smileThreshold={smileThreshold}
          $done={done}
        >
          <Styled.conditionalTextContainer>
            {done ? (
              <h2>
                you did well! <br />
                ☺️
              </h2>
            ) : smileThreshold > 0.5 ? (
              <Styled.conditionalText>keep smiling!</Styled.conditionalText>
            ) : facesDetected ? (
              <Styled.conditionalText>
                we see your face but no smile detected. please smile!
              </Styled.conditionalText>
            ) : (
              <Styled.conditionalText>
                no face detected. reposition your face
              </Styled.conditionalText>
            )}
            <Styled.conditionalText>
              {done ? null : `${Math.ceil(counter)} seconds remaining`}
            </Styled.conditionalText>
          </Styled.conditionalTextContainer>
        </Styled.Circle>
      </motion.div>
    </>
  );
}
