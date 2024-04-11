import { Container, Page } from "@/components/Layout/Layout.styled";
import ActivitiesList from "@/components/ActivitiesList/ActivitiesList";
import styled from "styled-components";
import { useState } from "react";
import Guide from "@/components/Guide/Guide";
import ActivitiesForm from "@/components/ActivitiesForm/ActivitiesForm";

export default function Activities() {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  //! refactor ActivitiesForm to Modal
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
    </Container>
  );
}

const GradientText = styled.div`
  align-self: center;
  background: var(--effect-linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
