import styled from "styled-components";

export const QuoteCard = styled.div`
  background: var(--effect-radial-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-l);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: var(--spacing-xl);
  position: relative;
  cursor: pointer;
`;

export const Quote = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-family: var(--font-serif);
`;
