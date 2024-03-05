import styled from "styled-components";

export const EntryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledEntry = styled.li`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

export const SliderText = styled.span`
  font-weight: bold;
`;

export const ExperienceText = styled.span`
  font-weight: bold;
`;

export const EntryText = styled.span`
  font-weight: bold;
  font-style: italic;
`;

export const Separator = styled.hr`
  border: 0.5px solid grey;
  width: 100%;
`;

export const EditDeleteButton = styled.button`
  color: ${(props) => (props.variant !== "2" ? "white" : "black")};
  background-color: ${(props) => (props.variant === "2" ? "red" : "green")};
  border-radius: 20%;
  border: 0;
`;
