import * as Styled from "./SmileTrainer.styled";
import { useState, useEffect } from "react";
import NavButton from "@/components/NavButton/NavButton";
import { useSphereState } from "@/components/ContextProviders/SphereStateProvider/SphereStateProvider";

export default function SmileTrainer({ smileThreshold, facesDetected }) {
  const [counter, setCounter] = useState(10);
  const [done, setDone] = useState(false);
  const { sphereState, handleSphereState } = useSphereState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 0) {
        setDone(true);
        clearInterval(interval);
      } else if (smileThreshold > 0.5 && counter > 0) {
        setCounter((prevCounter) => prevCounter - 0.1);
        handleSphereState({ color: "#779962", intensity: 0.1 });
      } else if (facesDetected && smileThreshold < 0.5) {
        handleSphereState({ color: "#7190D4", intensity: 0.1 });
      } else if (!facesDetected) {
        handleSphereState({ color: "grey", intensity: 0.1 });
      }
    }, 100);

    return () => clearInterval(interval);
  });

  function handleRestart() {
    setCounter(10);
    setDone(false);
  }

  return (
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
      {done && (
        <Styled.ButtonContainer>
          <NavButton handleClick={() => handleRestart()}>
            do it again!
          </NavButton>
        </Styled.ButtonContainer>
      )}
    </Styled.conditionalTextContainer>
  );
}
