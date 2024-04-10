import styled from "styled-components";
import Link from "next/link";

export const TextContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const SourceContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-size: small;
`;

export const Article = styled.article`
  margin-top: 1%.5;
`;

export const MeditationContainer = styled.div`
  padding: 0 20rem 0 20rem;
`;

export const BrightLink = styled(Link)`
  text-decoration: none;
  color: #ffffff; /* Set the color to a bright blue (you can adjust the color as needed) */

  /* Hover effect (optional) */
  &:hover {
    text-decoration: underline; /* Underline on hover (you can modify this effect) */
  }
`;
