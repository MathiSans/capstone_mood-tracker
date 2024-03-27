import styled from "styled-components";

export const Select = styled.select`
  color: ${(props) => props.theme.colors.dark};
  padding: 0.2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  padding: 30px;
  justify-items: center;
  align-items: center;
  width: 100vw;
`;

export const Card = styled.div`
  background-color: #141414;
  background: rgb(42, 42, 42);
  background: radial-gradient(
    circle,
    rgba(42, 42, 42, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  margin: 1rem;
  width: 300px;
  padding: 28px;
  position: relative;
`;

export const Tag = styled.div`
  right: 20px;
  top: 22px;
  background-color: ${(props) => props.theme.light};
  color: #3a3a3a;
  padding: 5px 12px;
  border-radius: 10px;
  font-size: 0.9rem;
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
  color: ${(props) => props.theme.tertiary};
  text-align: center;
  padding: 0;
  margin: 0;
`;
