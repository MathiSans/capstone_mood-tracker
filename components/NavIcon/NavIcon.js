import * as Styled from "./NavIcon.styled";

export default function NavIcon({
  handleClick,
  disabled,
  children,
  linkToPage,
}) {
  return (
    <Styled.IconContainer onClick={handleClick} disabled={disabled}>
      {linkToPage ? (
        <Styled.Icon disabled={disabled} href={linkToPage}>
          {children}
        </Styled.Icon>
      ) : (
        <span>{children}</span>
      )}
    </Styled.IconContainer>
  );
}
