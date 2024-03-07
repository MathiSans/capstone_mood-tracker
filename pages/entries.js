import React from "react";
import Guide from "@/components/Guide/Guide";
import Page from "@/components/Page/Page";
import FlowContainer from "@/components/FlowContainer/FlowContainer";
import NavButton from "@/components/NavButton/NavButton";
import Navigation from "@/components/Navigation/Navigation";
import { useRouter } from "next/router";
import EntriesList from "@/components/EntryList/EntryList";

export default function Entries() {
  const router = useRouter();

  return (
    <FlowContainer>
      <Page>
        <Guide text={"your emotion collection"} />
        <EntriesList />
      </Page>
      <Navigation>
        <NavButton handleClick={() => router.push("flow")}>
          enter a mood
        </NavButton>
      </Navigation>
    </FlowContainer>
  );
}
