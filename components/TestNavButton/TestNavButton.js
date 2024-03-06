import * as Styled from "./TestNavButton.styled";

export default function TestNavButton({ handleClick, disabled, children }) {
  return (
    <Styled.Button onClick={handleClick} disabled={disabled}>
      {children}
    </Styled.Button>
  );
}
