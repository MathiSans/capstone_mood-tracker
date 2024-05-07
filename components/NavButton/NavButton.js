import * as Styled from "./NavButton.styled";
import { useTheme } from "styled-components";

export default function NavButton({
  handleClick,
  disabled,
  children,
  linkToPage,
}) {
  const theme = useTheme();
  return (
    <Styled.Button onClick={handleClick} $disabled={disabled}>
      {linkToPage ? (
        <Styled.ButtonTextLink $disabled href={linkToPage} theme={theme}>
          {children}
        </Styled.ButtonTextLink>
      ) : (
        <Styled.ButtonText>{children}</Styled.ButtonText>
      )}
    </Styled.Button>
  );
}
