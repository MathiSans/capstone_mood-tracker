import styled from "styled-components";

export const Select = styled.select`
  color: ${(props) => props.theme.colors.dark};
  padding: 0.2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${(props) => props.theme.spacing.xl};
  padding: ${(props) => props.theme.spacing.xl};
  justify-items: center;
  align-items: center;
  width: 100vw;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.effects.radialGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.l};
  border-radius: ${(props) => props.theme.borders.radiusSmall};
  width: 300px;
  padding: ${(props) => props.theme.spacing.xl};
  position: relative;
`;

export const Tag = styled.div`
  right: 20px;
  top: 22px;
  background-color: ${(props) => props.theme.colors.light};
  color: #3a3a3a;
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.m}`};
  border-radius: 0.625rem;
  font-size: ${(props) => props.theme.fontsize.small};
`;

export const Emoji = styled.p`
  font-size: 4rem;
  margin: -2px;
  padding: 0;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.neutral};
  text-align: center;
  padding: 0;
  margin: 0;
`;
