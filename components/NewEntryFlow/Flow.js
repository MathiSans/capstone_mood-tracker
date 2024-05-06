import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { experiences } from "@/experiences";
import NavButton from "@/components/NavButton/NavButton";
import PageDisplay from "@/components/PageDisplay/PageDisplay";
import * as Styled from "@/components/Layout/Layout.styled";
import useSWR from "swr";
import AudioSettings from "../AudioSettings/AudioSettings";
import fetchLocation from "@/utils/locationTracking";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import Settings from "../x_Settings/Settings";
import SettingsTrigger from "../x_SettingsTrigger/SettingsTrigger";
import { SettingsTriggerContainer } from "@/components/Overlay/Overlay.styled";
import { useSphereState } from "../ContextProviders/SphereStateProvider/SphereStateProvider";
import { useEffect } from "react";

export default function Flow() {
  const { mutate } = useSWR("/api/entries");
  const [experience, setExperience] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [color, setColor] = useState("grey");
  const [page, setPage] = useState(0);
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const [hideInterface, setHideInterface] = useState(false);
  const { handleSphereState } = useSphereState();

  useEffect(() => {
    handleSphereState({ color: color, intensity: sliderValue });
  }, [color, sliderValue]);

  const { data: session } = useSession();
  const userId = session?.user.id;

  const guides = [
    "Breath in...",
    "... and out",
    "Assess this very moment",
    "And continue...",
    "What feeling are you experiencing?",
    "How intense is this feeling?",
    "How do or did you react?",
    "Your new entry has been added.",
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

  const handleLoginButton = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <>
      <AudioSettings
        showSettings={showSettings}
        experience={experience}
        audioTrigger={audioTrigger}
        setAudioTrigger={setAudioTrigger}
      />
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
              <NavButton handleClick={handleLoginButton}>Login</NavButton>
            )}
            {page < 1 && (
              <NavButton
                handleClick={() => {
                  setAudioTrigger(true);
                  setPage((currPage) => currPage + 1);
                }}
              >
                {!session
                  ? "Log your mood anonymously"
                  : "Log your current mood"}
              </NavButton>
            )}
            {page === 1 && (
              <NavButton
                handleClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </NavButton>
            )}
            {(page === 3 || page === 4) && (
              <NavButton
                handleClick={() => setPage((currPage) => currPage - 1)}
              >
                Previous
              </NavButton>
            )}
            {(page === 2 || page === 3) && (
              <NavButton
                disabled={experience.length === 0}
                handleClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </NavButton>
            )}
            {page === 4 && (
              <NavButton
                disabled={reactions.length === 0}
                handleClick={handleSave}
              >
                Next
              </NavButton>
            )}

            {page === 5 && (
              <NavButton linkToPage={"./entries_old"}>
                Check out your entries
              </NavButton>
            )}
          </Styled.Navigation>
        </AnimationWrapper>
      </Styled.Container>
    </>
  );
}
