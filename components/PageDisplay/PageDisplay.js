import Guide from "../Guide/Guide";
import GuideAnimator from "../GuideAnimator/GuideAnimator";
import TagCloud from "../TagCloud/TagCloud";
import Slider from "../Slider/Slider";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AsideAnimationWrapper } from "../SiteStepAnimation/SiteStepAnimation";
import AnimationWrapper from "../SiteStepAnimation/SiteStepAnimation";

export default function PageDisplay({
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
  return (
    <>
      <AnimatePresence mode="wait">
        {(() => {
          switch (page) {
            case 0:
              return <Guide bigger={true} text={"komm zur Ruh"} />;
            case 1:
              return <GuideAnimator guides={guides} />;
            case 2:
              return (
                <>
                  <AnimationWrapper fadeIn>
                    <Guide text={guides[4]} />
                  </AnimationWrapper>
                  <AnimatePresence mode="wait">
                    <AnimationWrapper leftToRight key={page}>
                      <TagCloud
                        tags={experiences}
                        colorSelected={true}
                        allowMultiple={false}
                        onSelectTag={handleSelectExperience}
                        selectedTags={experience}
                      />
                      {/* <NavButton
                    disabled={experience.length === 0}
                    handleClick={() => {
                      setPage((currPage) => currPage + 1);
                    }}
                  >
                    next
                  </NavButton> */}
                    </AnimationWrapper>
                  </AnimatePresence>
                </>
              );
            case 3:
              return (
                <>
                  <AnimationWrapper fadeIn key={`3-${guides[5]}`}>
                    <Guide text={guides[5]} />
                  </AnimationWrapper>
                  <AnimatePresence mode="wait">
                    <AnimationWrapper leftToRight key={page}>
                      <Slider
                        experience={experience}
                        sliderValue={sliderValue}
                        handleSliderChange={handleSliderChange}
                      />
                    </AnimationWrapper>
                  </AnimatePresence>
                </>
              );
            case 4:
              return (
                <>
                  <AnimationWrapper fadeIn key={`fadeIn-4`}>
                    <Guide text={guides[6]} />
                  </AnimationWrapper>
                  <AnimatePresence mode="wait">
                    <AnimationWrapper leftToRight key={page}>
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
                  <AnimationWrapper fadeIn key={page}>
                    <Guide text={guides[7]} />
                  </AnimationWrapper>
                </AnimatePresence>
              );
          }
        })()}
      </AnimatePresence>
    </>
  );
}
