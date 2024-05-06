import styled from "styled-components";
import Link from "next/link";

export const TileH2 = styled.h2`
  color: #ffffff;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.8rem;
  max-width: 60%;
  margin-block-start: 0.5rem;
  text-decoration: none;
  filter: drop-shadow(#4d4d4d 0rem 0rem 5px);
  opacity: 1;
`;

export const ActivityDescription = styled.p`
  color: white;
  font-size: 0.6rem;
  font-weight: 500;
  line-height: 14px;
  max-width: 50%;
  margin-block-start: 0.4rem;
  text-decoration: none;
`;

export const ActivityLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
