import * as Styled from "./NavButton.styled";
import { useTheme } from "styled-components";

export default function NavButton({
  handleClick,
  disabled,
  children,
  linkToPage,
}) {
  const theme = useTheme();
  console.log("THEME-NAVBUTTON", theme);
  return (
    <Styled.Button onClick={handleClick} $disabled={disabled} theme={theme}>
      {linkToPage ? (
        <Styled.ButtonTextLink
          $disabled={disabled}
          href={linkToPage}
          theme={theme}
        >
          {children}
        </Styled.ButtonTextLink>
      ) : (
        <span>{children}</span>
      )}
    </Styled.Button>
  );
}
