import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Quotes({ quotes }) {
  const [quoteState, setQuoteState] = useState({});
  const [nextQuote, setNextQuote] = useState(0);

  function handleRandomQuote() {
    if (!quotes || !Array.isArray(quotes) || quotes.length === 0) {
      return <p>No quotes available</p>;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuoteState(randomQuote);
    setNextQuote(quotes);
  }
  useEffect(() => {
    handleRandomQuote();
  });
  useEffect(() => {
    handleRandomQuote();
  }, [nextQuote]);

  return (
    <QuoteContainer>
      <StyledArticle>
        <StyledBlockquote>{quoteState.text}</StyledBlockquote>
        <StyledFooter>{quoteState.author}</StyledFooter>
      </StyledArticle>
      <StyledButton
        onClick={() => {
          setNextQuote((currQuote) => currQuote + 1);
        }}
      >
        new quote
      </StyledButton>
    </QuoteContainer>
  );
}

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledArticle = styled.article`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1rem;
  border: 2px solid white;
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.359) 0px 10px 15px -3px,
    rgba(255, 255, 255, 0.776) 0px 4px 6px -2px;
  padding: 1.5rem;
`;

const StyledBlockquote = styled.blockquote`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: large;
`;
const StyledFooter = styled.footer`
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 1rem;
  border-radius: 12px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 1px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
