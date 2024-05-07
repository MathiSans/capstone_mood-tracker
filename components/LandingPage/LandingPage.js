import { useState } from "react";
import * as Styled from "./LandingPage.styled";
import { MdInfoOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";

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
                Learn to observe and understand your emotional fluctuations. Try
                out suggested activities to improve and maintain your mood and
                connect with people you care about, share and appreciate their
                moodiness as well. Enjoy the journey!
              </p>
              <br />
              <p>
                This web app has been built by a group of five. We all
                participated in a Web Development Bootcamp and this final
                capstone project is the result. Feel free to visit us in GitHub:
              </p>
            </Styled.InfoText>
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
