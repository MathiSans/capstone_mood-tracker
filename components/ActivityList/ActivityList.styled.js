import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100vw;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

export const ToolSpan = styled.span`
  font-weight: bold;
  background-color: white;
  color: black;
  padding: 0.1rem;
  border-radius: 5px;
`;

export const NewEntryLink = styled(Link)`
  &:link {
    color: yellow;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: hotpink;
  }
  &:active {
    color: lightcyan;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid white;
  padding: 1.5rem;
  border-radius: 12px;
`;

export const DesignContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  padding: 0.8rem;
`;
export const StyledEmoji = styled.p`
  background-color: white;
  font-size: 4rem;
  text-align: center;
  list-style-type: none;
`;

export const StyledListElement = styled.li`
  border: 1px solid white;
  border-radius: 12px;
  list-style-type: none;
  margin: 5rem;
`;

export const StyledText = styled.p`
  padding: 1.5rem;
`;
