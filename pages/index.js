import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Container>
      <h1>Mood Tracker &#40;wip&#41;</h1>
      <StyledLink href={"https://github.com/MathiSans/mood-diary"}>
        <p>Github</p>
      </StyledLink>
      <StyledLink href={"flow"}>
        <p>Mood Tracker</p>
      </StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: black;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.5rem;

  p {
    margin: 5px;
  }
`;
