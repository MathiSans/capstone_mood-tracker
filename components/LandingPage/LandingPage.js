import { useState } from "react";
import * as Styled from "./LandingPage.styled";
import { MdInfoOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import styled, { keyframes } from "styled-components";

const colorCycle = keyframes`
  0% { color: red; }
  20% { color: blue; }
  40% { color: green; }
  60% { color: yellow; }
  80% { color: purple; }
  100% { color: red; }
`;

export default function LandingPage() {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);

  function handleShowInfo() {
    setInfoBoxVisible(!isInfoBoxVisible);
  }

  return (
    <Styled.InfoContainer>
      {!isInfoBoxVisible && (
        <>
          <Styled.Title>Ruh</Styled.Title>
          <Styled.Subtitle>
            Track your moods, <br />
            get inspired to change them <br />
            and connect with others
          </Styled.Subtitle>
          <Styled.InfoIcon
            onClick={handleShowInfo}
            aria-label="open info box for more information around the app"
          >
            <MdInfoOutline />
          </Styled.InfoIcon>
        </>
      )}
      <AnimatePresence>
        {isInfoBoxVisible && (
          <Styled.InfoBox
            key="InfoBox"
            visible={isInfoBoxVisible}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <Styled.InfoText>
              <p>The Mood Tracker Project</p>
              <p>
                <br />
                The Ruh app enables you to log, improve and maintain your mood.
                Learn to observe your emotional fluctuations and become more
                mindful towards them through activities and by connecting with
                people you care about. Enjoy the journey!
              </p>
              <br />
              <p>
                Ruh is a capstone project built by
                <br />
                <Styled.Contributor
                  href={"https://github.com/janphilipp-winkler"}
                >
                  Jan-Philipp
                </Styled.Contributor>
                ,
                <Styled.Contributor href={"https://github.com/MathiSans"}>
                  Mathis
                </Styled.Contributor>
                ,
                <Styled.Contributor href={"https://github.com/NikCrmr"}>
                  Niko
                </Styled.Contributor>
                ,
                <Styled.Contributor href={"https://github.com/Ramin-faqyri"}>
                  Ramin
                </Styled.Contributor>
                and
                <Styled.Contributor
                  href={"https://github.com/janphilipp-winkler"}
                >
                  Şevket
                </Styled.Contributor>{" "}
                during a Frontend Dev Bootcamp.
              </p>
            </Styled.InfoText>
            <Styled.GitHubLink
              href={"https://github.com/MathiSans/capstone_mood-tracker"}
            >
              Ruh on Github
            </Styled.GitHubLink>
            <Styled.CloseIcon
              visible={isInfoBoxVisible}
              onClick={handleShowInfo}
              aria-label="close info box"
            >
              <IoClose />
            </Styled.CloseIcon>
          </Styled.InfoBox>
        )}
      </AnimatePresence>
    </Styled.InfoContainer>
  );
}
