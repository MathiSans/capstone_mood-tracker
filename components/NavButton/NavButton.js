import * as Styled from "./NavButton.styled";

export default function NavButton({ handleClick, disabled, children }) {
  return (
    <Styled.Button onClick={handleClick} disabled={disabled}>
      {children}
    </Styled.Button>
  );
}
