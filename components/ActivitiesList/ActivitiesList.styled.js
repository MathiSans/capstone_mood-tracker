import styled from "styled-components";

export const Select = styled.select`
  color: var(--color-main);
  padding: 0.2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: var(--spacing-xl);
  padding: var(--spacing-xl);
  justify-items: center;
  align-items: center;
  width: 100vw;
`;

export const Card = styled.div`
  background: var(--effect-radial-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
  border-radius: var(--radius-small);
  width: 300px;
  padding: var(--spacing-xl);
  position: relative;
`;

export const Tag = styled.div`
  right: 20px;
  top: 22px;
  background-color: var(--color-main-alt);
  color: #3a3a3a;
  padding: var(--spacing-s);
  border-radius: 0.625rem;
  font-size: var(--font-size-small);
`;

export const Emoji = styled.p`
  font-size: 4rem;
  margin: -2px;
  padding: 0;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: var(--font-weight-bold);
  padding: 0;
  margin: 0;
`;

export const Description = styled.p`
  color: var(--color-neutral);
  text-align: center;
  padding: 0;
  margin: 0;
`;
