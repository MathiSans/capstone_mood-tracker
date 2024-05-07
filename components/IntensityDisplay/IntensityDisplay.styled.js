import styled from "styled-components";

export const IntensityContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Intensity = styled.p`
  min-width: 80px;
  font-size: var(--font-size-small);
  font-weight: 400;
  text-align: center;
  color: ${(props) =>
    props.index === 1 ? "var(--color-light)" : "rgba(255, 255, 255, 0.5)"};
  padding: var(--spacing-m) 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-small);
`;
