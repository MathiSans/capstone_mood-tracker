import styled from "styled-components";

export const IntensityContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Intensity = styled.p`
  color: ${(props) =>
    props.index === 1 ? "white" : "rgba(255, 255, 255, 0.5)"};
  text-align: center;
  min-width: 80px;
  text-shadow: black 2px 0 25px;
`;
