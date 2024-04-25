import styled from "styled-components";

export const redFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  border: 4px solid var(--color-danger);
  z-index: 1;
`;

export const DisclaimerText = styled.p`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 20px;
  left: 0;
  right: 0;
  text-align: center;
  width: 80%;
  color: var(--color-danger);
`;

export const HiddenVideo = styled.video`
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  visibility: hidden;
`;

export const HiddenDiv = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  visibility: hidden;
`;

export const HiddenCanvas = styled.canvas`
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  visibility: hidden;
`;
