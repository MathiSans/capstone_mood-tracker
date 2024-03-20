import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 10vh;
`;

export const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
`;
