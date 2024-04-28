import styled from "styled-components";

export const Container = styled.div`
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-end: span 4;
  grid-row-end: span 2;
  overflow-x: scroll; //added by Niko for the community boxes
`;
