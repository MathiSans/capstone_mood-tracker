import Guide from "../Guide/Guide";
import GuideAnimator from "../GuideAnimator/GuideAnimator";
import TagCloud from "../TagCloud/TagCloud";
import Slider from "../Slider/Slider";
import IntensityDisplay from "../IntensityDisplay/IntensityDisplay";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  switch (page) {
    case 0:
      return (
        <>
          <Guide bigger={true} text={"komm zur Ruh"} />
          {session && <Guide text={`Welcome back, ${session.user.name}`} />}
        </>
      );
    case 1:
      return <GuideAnimator guides={guides} />;
    case 2:
      return (
        <>
          <Guide text={guides[4]} />
          <TagCloud
            tags={experiences}
            colorSelected={true}
            allowMultiple={false}
            onSelectTag={handleSelectExperience}
            selectedTags={experience}
          />
        </>
      );
    case 3:
      return (
        <>
          <Guide text={guides[5]} />
          <Slider
            experience={experience}
            sliderValue={sliderValue}
            handleSliderChange={handleSliderChange}
          />
          <IntensityDisplay experience={experience} sliderValue={sliderValue} />
        </>
      );
    case 4:
      return (
        <>
          <Guide text={guides[6]} />
          <TagCloud
            selectedTags={reactions}
            tags={experience[0].reactions}
            colorSelected={true}
            allowMultiple={true}
            onSelectTag={handleSelectReactions}
          />
        </>
      );
    case 5:
      return <Guide text={guides[7]} />;
  }
}
