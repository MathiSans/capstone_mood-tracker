import React from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import { useRouter } from "next/router";
import EntriesList from "@/components/EntriesList/EntriesList";
import { Container, Navigation, Page } from "@/components/Layout/Layout";

export default function Entries() {
  const router = useRouter();

  return (
    <Container>
      <Page>
        <Guide text={"emotion collection"} />
        <EntriesList />
      </Page>
      <Navigation>
        <NavButton linkToPage={"/"}>enter a mood</NavButton>
      </Navigation>
    </Container>
  );
}
