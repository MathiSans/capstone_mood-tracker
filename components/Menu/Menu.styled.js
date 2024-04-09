import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  margin-block-end: 1.5rem;
  gap: 14px;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-l);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;
