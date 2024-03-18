import styled from "styled-components";

const SmileTrainer = (x) => {
  console.log("x", x.x.current.happy);
  const happy = x.x.current.happy;
  return (
    <div>
      <h1>Smile Trainer Component</h1>
      <SmileTrainerPTag>{happy > 0.5 ? "😃" : "𝐗"}</SmileTrainerPTag>
    </div>
  );
};

export default SmileTrainer;

const SmileTrainerPTag = styled.p`
  font-size: 5rem;
`;
