import styled, { css, keyframes } from "styled-components";

const indicatorAnimation = keyframes`
  0% {
    background: grey; 
    transform: scale(1); 
  }
  50% {
    background: white;
    transform: scale(1.3); 
  }
  100% {
    background: grey;
    transform: scale(1);
  }
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  border-radius: 2rem;
  width: 3rem;
  height: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -110px;
  padding-inline: 0.2rem;
  filter: drop-shadow(#242321 0rem 0rem 4px);
`;

export const Indicator = styled.div`
  height: 0.35rem;
  width: 0.35rem;
  border-radius: 50%;
  background: ${(props) => (props.$active ? "white" : "grey")};
  ${(props) =>
    props.$active &&
    css`
      animation: ${css`
        ${indicatorAnimation} 5500ms forwards
      `};
    `}
`;

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 1.5rem;
`;
