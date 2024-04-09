import styled from "styled-components";

export const conditionalText = styled.p``;

export const conditionalTextContainer = styled.div`
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
`;

export const Circle = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: var(--border-radius-round);
  box-shadow: inset 0 0 60px var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $facesDetected, $smileThreshold, $done }) =>
    $done || $smileThreshold > 0.5
      ? "#18a924"
      : $facesDetected
      ? "#330aea"
      : "#262626"};
`;

export const InnerCircle = styled.div`
  position: absolute;
  height: 90%;
  width: 90%;
  border-radius: var(--border-radius-round);
  box-shadow: inset 0 0 60px black;
  background-color: ${(props) =>
    props.done || props.smileThreshold > 0.5
      ? "#00FF00"
      : props.facesDetected
      ? "#6C6C6C"
      : "#262626"};
`;
