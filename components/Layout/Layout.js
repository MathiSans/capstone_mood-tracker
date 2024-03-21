import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
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
  position: relative;
  justify-content: center;
  align-items: center;
  bottom: 0;
  display: flex;
  gap: 20px;
  /* margin-bottom: 60px; */
  /* background: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 33%,
    rgba(0, 0, 0, 0) 100%
  ); */
  /* width: 100vw;
  height: 20vh; */
`;
