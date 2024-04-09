import Guide from "../Guide/Guide";
import GuideAnimator from "../GuideAnimator/GuideAnimator";
import TagCloud from "../TagCloud/TagCloud";
import Slider from "../Slider/Slider";
import IntensityDisplay from "../IntensityDisplay/IntensityDisplay";
import { useSession } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import * as Styled from "./PageDisplay.styled";

export default function PageDisplay({
  hideInterface,
  guides,
  experience,
  experiences,
  page,
  reactions,
  sliderValue,
  handleSliderChange,
  handleSelectExperience,
  handleSelectReactions,
}) {
  const { data: session } = useSession();

  return (
    <AnimatePresence mode="wait">
      {(() => {
        switch (page) {
          case 0:
            return (
              <>
                <Styled.TitleContainer>
                  <Guide bigger={true} text={"komm zur Ruh"} />
                  {session && (
                    <h2 style={{ textAlign: "center" }}>
                      Welcome back, <br />
                      {session.user.name}
                    </h2>
                  )}
                </Styled.TitleContainer>
              </>
            );
          case 1:
            return <GuideAnimator guides={guides} />;
          case 2:
            return (
              <>
                <AnimationWrapper hideInterface={hideInterface} fadeIn>
                  <Guide text={guides[4]} />
                </AnimationWrapper>
                <AnimatePresence mode="wait">
                  <AnimationWrapper
                    hideInterface={hideInterface}
                    leftToRight
                    key={page}
                  >
                    <TagCloud
                      tags={experiences}
                      colorSelected={true}
                      allowMultiple={false}
                      onSelectTag={handleSelectExperience}
                      selectedTags={experience}
                    />
                  </AnimationWrapper>
                </AnimatePresence>
              </>
            );
          case 3:
            return (
              <>
                <AnimationWrapper
                  hideInterface={hideInterface}
                  fadeIn
                  key={`3-${guides[5]}`}
                >
                  <Guide text={guides[5]} />
                </AnimationWrapper>
                <AnimatePresence mode="wait">
                  <AnimationWrapper
                    hideInterface={hideInterface}
                    leftToRight
                    key={page}
                  >
                    <Slider
                      experience={experience}
                      sliderValue={sliderValue}
                      handleSliderChange={handleSliderChange}
                    />
                    <IntensityDisplay
                      experience={experience}
                      sliderValue={sliderValue}
                    />
                  </AnimationWrapper>
                </AnimatePresence>
              </>
            );
          case 4:
            return (
              <>
                <AnimationWrapper
                  hideInterface={hideInterface}
                  fadeIn
                  key={`fadeIn-4`}
                >
                  <Guide text={guides[6]} />
                </AnimationWrapper>
                <AnimatePresence mode="wait">
                  <AnimationWrapper
                    hideInterface={hideInterface}
                    leftToRight
                    key={page}
                  >
                    <TagCloud
                      selectedTags={reactions}
                      tags={experience[0].reactions}
                      colorSelected={true}
                      allowMultiple={true}
                      onSelectTag={handleSelectReactions}
                    />
                  </AnimationWrapper>
                </AnimatePresence>
              </>
            );
          case 5:
            return (
              <AnimatePresence mode="wait">
                <AnimationWrapper
                  hideInterface={hideInterface}
                  fadeIn
                  key={page}
                >
                  <Guide text={guides[7]} />
                </AnimationWrapper>
              </AnimatePresence>
            );
        }
      })()}
    </AnimatePresence>
  );
}
