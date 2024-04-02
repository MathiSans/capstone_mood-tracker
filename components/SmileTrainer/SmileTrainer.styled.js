import styled from "styled-components";

export const conditionalText = styled.p``;

export const conditionalTextContainer = styled.div`
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Circle = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: ${(props) => props.theme.borders.radiusRound};
  box-shadow: inset 0 0 60px ${(props) => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.done || props.smileThreshold > 0.5
      ? "#00FF00"
      : props.facesDetected
      ? "#6C6C6C"
      : "#262626"};
  /* background-color: ${({ facesDetected, smileThreshold, done }) =>
    done
      ? "#00FF00"
      : smileThreshold > 0.5
      ? "#00FF00"
      : facesDetected
      ? "#6C6C6C"
      : "#262626"}; */
`;

export const InnerCircle = styled.div`
  position: absolute;
  height: 90%;
  width: 90%;
  border-radius: ${(props) => props.theme.borders.radiusRound};
  box-shadow: inset 0 0 60px #000000;
  background-color: ${(props) =>
    props.done || props.smileThreshold > 0.5
      ? "#00FF00"
      : props.facesDetected
      ? "#6C6C6C"
      : "#262626"};
  /* background-color: ${({ facesDetected, smileThreshold, done }) =>
    done
      ? "#00FF00"
      : smileThreshold > 0.5
      ? "#00FF00"
      : facesDetected
      ? "#6C6C6C"
      : "#262626"}; */
`;
