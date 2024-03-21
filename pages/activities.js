import { Container, Navigation, Page } from "@/components/Layout/Layout";
import ActivitiesList from "@/components/ActivitiesList/ActivitiesList";
import styled from "styled-components";
import { useState } from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";
import PlusIcon from "@/assets/plus.png";
import Image from "next/image";
import ActivitiesForm from "@/components/ActivitiesForm/ActivitiesForm";
import { motion } from "framer-motion";

export default function Activities() {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <Container>
        <Page>
          <Header>
            <GradientText>
              <Guide text={"activities"} />
            </GradientText>
            <NewActivity onClick={handleShowForm}>
              <motion.div
                animate={showForm ? { rotate: 45 } : {}}
                style={{ height: "22px" }}
              >
                <Image
                  width={22}
                  height={22}
                  src={PlusIcon}
                  alt={"add new activity"}
                />
              </motion.div>
            </NewActivity>
          </Header>

          {showForm ? (
            <ActivitiesForm handleShowForm={handleShowForm} />
          ) : (
            <ActivitiesList showForm={showForm} />
          )}
        </Page>
        {showForm ? null : (
          <Navigation>
            <NavButton linkToPage={"/"}>enter a mood</NavButton>
          </Navigation>
        )}
      </Container>
    </>
  );
}

const Header = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const NewActivity = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 18px;
  height: 38px;
  width: 38px;
  background-color: white;
  border-radius: 100px;
  cursor: pointer;
`;

const GradientText = styled.div`
  align-self: center;
  background: -webkit-linear-gradient(#e3f710, #ff0000);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
