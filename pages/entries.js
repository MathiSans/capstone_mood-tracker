import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import EntriesList from "@/components/EntryList/EntriesList";
import * as Styled from "@/components/Layout/Layout";

export default function Entries() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Page>
        <Guide text={"your emotion collection"} />
        <EntriesList />
      </Styled.Page>
      <Styled.Navigation>
        <NavButton handleClick={() => router.push("/")}>enter a mood</NavButton>
      </Styled.Navigation>
    </Styled.Container>
  );
}
