import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import Quotes from "@/components/Quotes/Quotes";
import { useRouter } from "next/router";
import * as Styled from "@/components/Layout/Layout";
import useSWR from "swr";
import { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL1 = "https://zenquotes.io/api/today/";
const URL2 = "https://type.fit/api/quotes";
const URL3 = "https://api.quotable.io/quotes/random";
const URL4 = "https://api.quotable.io/quotes/";

export default function QuotesRender() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(URL2, fetcher);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <Styled.Container>
      <Styled.Page>
        <Guide text={"Quotes"} />
        <Quotes quotes={data} />
      </Styled.Page>
      <Styled.Navigation>
        <NavButton handleClick={() => router.back()}>back</NavButton>
      </Styled.Navigation>
    </Styled.Container>
  );
}
