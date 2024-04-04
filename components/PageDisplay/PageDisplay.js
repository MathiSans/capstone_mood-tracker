import Guide from "../Guide/Guide";
import GuideAnimator from "../GuideAnimator/GuideAnimator";
import TagCloud from "../TagCloud/TagCloud";
import Slider from "../Slider/Slider";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import NavButton from "@/components/NavButton/NavButton";

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
                <Guide text={guides[4]} />
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2 }}
                >
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
                </motion.div>
              </>
            );
          case 3:
            return (
              <>
                <Guide text={guides[5]} />
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2 }}
                >
                  <Slider
                    experience={experience}
                    sliderValue={sliderValue}
                    handleSliderChange={handleSliderChange}
                  />
                </motion.div>
              </>
            );
          case 4:
            return (
              <>
                <Guide text={guides[6]} />
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2 }}
                >
                  <TagCloud
                    selectedTags={reactions}
                    tags={experience[0].reactions}
                    colorSelected={true}
                    allowMultiple={true}
                    onSelectTag={handleSelectReactions}
                  />
                </motion.div>
              </>
            );
          case 5:
            return <Guide text={guides[7]} />;
        }
      })()}
    </AnimatePresence>
  );
}
