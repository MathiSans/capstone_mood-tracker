import styled from "styled-components";

export const SettingsContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding-inline-end: 1.5rem;
  padding-block-end: 5.5rem;
  backdrop-filter: blur(16px);
  z-index: 100;
`;
