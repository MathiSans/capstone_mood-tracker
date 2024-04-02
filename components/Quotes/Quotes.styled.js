import styled from "styled-components";

export const QuoteCard = styled.div`
  background: radial-gradient(
    circle,
    rgba(42, 42, 42, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: ${(props) => props.theme.borders.radiusSmall};
  width: 100%;
  height: 100%;
  padding: 28px;
  position: relative;
  cursor: pointer;
`;

export const Quote = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.serif};
`;
