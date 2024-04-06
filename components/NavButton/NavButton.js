import * as Styled from "./NavButton.styled";

export default function NavButton({
  handleClick,
  disabled,
  children,
  linkToPage,
}) {
  return (
    <Styled.Button onClick={handleClick} disabled={disabled}>
      {linkToPage ? (
        <Styled.ButtonTextLink $disabled={disabled} href={linkToPage}>
          {children}
        </Styled.ButtonTextLink>
      ) : (
        <span>{children}</span>
      )}
    </Styled.Button>
  );
}
