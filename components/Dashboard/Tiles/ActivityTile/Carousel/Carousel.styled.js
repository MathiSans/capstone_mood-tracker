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
  right: 16px;
  top: 16px;
  padding-inline: 0.2rem;
  filter: drop-shadow(#242321 0rem 2px 6px);
  z-index: 2;
`;

export const Indicator = styled.div`
  height: 0.35rem;
  width: 0.35rem;
  border-radius: 50%;
  border: 1px solid white;
  background: ${(props) => (props.$active ? "white" : "none")};
  ${(props) =>
    props.$active &&
    css`
      animation: ${css`
        ${indicatorAnimation} 4000ms forwards
      `};
    `}
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
