import React, { useState } from "react";
import Guide from "@/components/Guide/Guide";
import Quotes from "@/components/Quotes/Quotes";
import { useRouter } from "next/router";
import * as Styled from "@/components/Layout/Layout.styled";
import useSWR, { mutate } from "swr";
import styled from "styled-components";

const URL1 = "https://zenquotes.io/api/today/";
const URL2 = "https://type.fit/api/quotes";
const URL3 = "https://api.quotable.io/quotes/random";
const URL4 = "https://api.quotable.io/quotes/";

export default function QuotesPage({ fetcher }) {
  const [quoteCounter, setQuoteCounter] = useState(0);
  const router = useRouter();
  const { data, error, isLoading } = useSWR(URL3, fetcher);

  if (isLoading) return null;
  if (error)
    return (
      <p>
        error: could not fetch quotes. original error message: {error.message}
      </p>
    );

  function refreshQuote() {
    mutate(URL3);
  }

  function handleCounter() {
    setQuoteCounter((prevState) => prevState + 1);
  }

  return (
    <Styled.Container>
      <Styled.Page>
        <Guide text={"Inspirational Quotes"} />
        {quoteCounter > 0 && (
          <CounterContainer>
            <Counter>{quoteCounter}</Counter>
            <p>quotes viewed</p>
          </CounterContainer>
        )}
        <Quotes
          handleCouter={handleCounter}
          quote={data}
          refreshQuote={refreshQuote}
        />
      </Styled.Page>
    </Styled.Container>
  );
}

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.5rem;
  gap: 0.5rem;
`;

const Counter = styled.p`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
  border-radius: var(--border-radius-round);
  background-color: var(--color-main-alt);
  color: var(--color-main);
`;
