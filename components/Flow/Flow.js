import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { experiences } from "@/experiences";
import Animation from "@/components/3DAnimation/3DAnimation";
import NavButton from "@/components/NavButton/NavButton";
import PageDisplay from "@/components/PageDisplay/PageDisplay";
import * as Styled from "@/components/Layout/Layout.styled";
import useSWR from "swr";
import AudioSettings from "../AudioSettings/AudioSettings";
import fetchLocation from "@/utils/locationTracking";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import Settings from "../Settings/Settings";
import SettingsTrigger from "../SettingsTrigger/SettingsTrigger";
import { SettingsTriggerContainer } from "@/components/Overlay/Overlay.styled";

export default function Flow() {
  const { mutate } = useSWR("/api/entries");
  const [experience, setExperience] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [color, setColor] = useState("grey");
  const [page, setPage] = useState(0);
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hideInterface, setHideInterface] = useState(false);

  const { data: session } = useSession();
  const userId = session?.user.id;

  const guides = [
    "share your emotions ...",
    "breathe",
    "think about your day",
    "how do you feel?",
    "what do you feel right now?",
    "how intense is this feeling for you?",
    "what's your reaction?",
    "Thank you for sharing",
  ];

  function handleShowSettings() {
    setShowSettings(!showSettings);
  }

  function handleHideInterface() {
    setHideInterface(!hideInterface);
  }

  function handleSelectExperience(tags) {
    setExperience(tags);
    setColor(tags[0].color);
  }

  function handleSelectReactions(tags) {
    setReactions(tags);
  }

  function handleSliderChange(event) {
    setSliderValue(event.target.value);
  }

  async function handleSave() {
    const reactionsArray = reactions.map((reaction) => reaction.name);
    const location = await fetchLocation();

    const response = await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toLocaleString(),
        user: session ? userId : null,
        location: {
          region: location.region,
          city: location.city,
        },
        experience: experience[0].name,
        color: experience[0].color,
        intensity: sliderValue,
        reactions: reactionsArray,
      }),
    });

    if (response.ok) {
      mutate();
      setPage((currPage) => currPage + 1);
    }
  }

  const button = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
      },
    },
  };

  const handleLoginButton = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  console.log(hideInterface);
  return (
    <>
      <Animation
        color={color}
        opacity={sliderValue}
        hideInterface={hideInterface}
      />
      <AudioSettings
        showSettings={showSettings}
        experience={experience}
        audioTrigger={audioTrigger}
        setAudioTrigger={setAudioTrigger}
      />
      <SettingsTriggerContainer>
        <SettingsTrigger
          showSettings={showSettings}
          handleShowSettings={handleShowSettings}
        />
      </SettingsTriggerContainer>
      {showSettings && (
        <Settings
          hideInterface={hideInterface}
          handleHideInterface={handleHideInterface}
        />
      )}
      <Styled.Container>
        <Styled.Page>
          <PageDisplay
            hideInterface={hideInterface}
            guides={guides}
            experience={experience}
            experiences={experiences}
            page={page}
            reactions={reactions}
            sliderValue={sliderValue}
            handleSliderChange={handleSliderChange}
            handleSelectExperience={handleSelectExperience}
            handleSelectReactions={handleSelectReactions}
          />
        </Styled.Page>
        <AnimationWrapper hideInterface={hideInterface} fadeIn key={page}>
          <Styled.Navigation>
            {!session && page === 0 && (
              <NavButton handleClick={handleLoginButton}>login</NavButton>
            )}
            {page < 1 && (
              <NavButton
                handleClick={() => {
                  setAudioTrigger(true);
                  setPage((currPage) => currPage + 1);
                }}
              >
                {!session
                  ? "log your mood anonymously"
                  : "log your current mood"}
              </NavButton>
            )}
            {page === 1 && (
              <NavButton
                handleClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                next
              </NavButton>
            )}
            {(page === 3 || page === 4) && (
              <NavButton
                handleClick={() => setPage((currPage) => currPage - 1)}
              >
                prev
              </NavButton>
            )}
            {(page === 2 || page === 3) && (
              <NavButton
                disabled={experience.length === 0}
                handleClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                next
              </NavButton>
            )}
            {page === 4 && (
              <NavButton
                disabled={reactions.length === 0}
                handleClick={handleSave}
              >
                next
              </NavButton>
            )}

            {page === 5 && (
              <NavButton linkToPage={"./entries"}>
                go to emotion entries
              </NavButton>
            )}
          </Styled.Navigation>
        </AnimationWrapper>
      </Styled.Container>
    </>
  );
}
