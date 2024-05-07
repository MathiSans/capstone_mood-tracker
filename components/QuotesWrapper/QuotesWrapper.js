import React, { useState } from "react";
import Quotes from "./Quotes/Quotes";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import * as Styled from "./QuotesWrapper.styled";

const URL1 = "https://zenquotes.io/api/today/";
const URL2 = "https://type.fit/api/quotes";
const URL3 = "https://api.quotable.io/quotes/random";
const URL4 = "https://api.quotable.io/quotes/";
const URL5 = "https://dummyjson.com/quotes/random";

export default function QuotesPage({ fetcher }) {
  const [quoteCounter, setQuoteCounter] = useState(0);
  const router = useRouter();
  const { data, error, isLoading } = useSWR(URL5, fetcher);

  if (isLoading) return null;
  if (error)
    return (
      <p>
        error: could not fetch quotes. original error message: {error.message}
      </p>
    );

  function refreshQuote() {
    mutate(URL5);
  }

  function handleCounter() {
    setQuoteCounter((prevState) => prevState + 1);
  }

  return (
    <>
      <Styled.Container>
        <Quotes
          handleCounter={handleCounter}
          quote={data}
          refreshQuote={refreshQuote}
        />
        {quoteCounter > 0 && (
          <Styled.CounterContainer>
            <Styled.Counter>{quoteCounter}</Styled.Counter>
            <p>quotes viewed</p>
          </Styled.CounterContainer>
        )}
      </Styled.Container>
    </>
  );
}
