import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import Quotes from "@/components/Quotes/Quotes";
import { useRouter } from "next/router";
import * as Styled from "@/components/Layout/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL1 = "https://zenquotes.io/api/quotes/";
const URL2 = "https://type.fit/api/quotes";

export default function QuotesRender() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(URL2, fetcher);
  if (isLoading) <h1>isLoading</h1>;
  if (error) <h1>error</h1>;

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
