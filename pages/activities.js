import { Container, Navigation, Page } from "@/components/Layout/Layout";
import ActivitiesList from "@/components/ActivitiesList/ActivitiesList";
import styled from "styled-components";
import { useState } from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import ActivitiesForm from "@/components/ActivitiesForm/ActivitiesForm";

export default function Activities() {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <Container>
      <Page>
        <GradientText>
          <Guide text={"activities"} />
        </GradientText>
        {showForm ? (
          <ActivitiesForm handleShowForm={handleShowForm} />
        ) : (
          <ActivitiesList showForm={showForm} handleShowForm={handleShowForm} />
        )}
      </Page>
      {showForm ? null : (
        <Navigation>
          <NavButton linkToPage={"/"}>enter a mood</NavButton>
        </Navigation>
      )}
    </Container>
  );
}

const GradientText = styled.div`
  align-self: center;
  background: -webkit-linear-gradient(#e3f710, #ff0000);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
