import * as Styled from "./Guide.styled";

export default function Guide({ text, bigger }) {
  return <Styled.Title $bigger={bigger}>{text}</Styled.Title>;
}
