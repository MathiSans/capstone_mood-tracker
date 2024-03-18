import styled, { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`;

export const AnimatedText = styled.span`
  animation: ${fadeInAnimation} 2s linear infinite alternate;
`;
