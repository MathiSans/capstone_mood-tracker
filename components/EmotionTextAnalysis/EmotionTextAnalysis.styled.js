import styled from "styled-components";

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  width: 100%;
  height: ${({ size }) =>
    size ? `${size}px` : "auto"}; // Default to 'auto' if no size provided
  padding: 1.5rem;
  background: radial-gradient(
    closest-corner,
    rgba(233, 233, 233, 1),
    rgba(163, 163, 163, 1) 100%,
    rgba(114, 114, 114, 1)
  );
`;

export const StyledTextarea = styled.textarea`
  padding: 8px;
  height: 120px;
  width: 240px;
`;

export const StyledQuestion = styled.p`
  text-align: center;
`;

export const TextAnalysisContainer = styled.div`
  width: 300px;
  overflow-y: auto;
  height: 60vh;
`;

export const StyledLabel = styled.div`
  /* margin-top: ${(props) => (props.showList ? "auto" : "-3rem")};
  padding-top: 1.5rem;
  margin-bottom: ${(props) => (props.predictionsState ? "-3rem" : "auto")}; */
`;
