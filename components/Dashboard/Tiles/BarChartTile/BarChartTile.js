import { useSession } from "next-auth/react";
import experienceAnalyser from "@/utils/experienceAnalyser";
import lastWeekAnalyser from "@/utils/lastWeekAnalyser";
import { useData } from "@/lib/useData";
import {
  BarChartContainer,
  LastWeekTogglePill,
  EntriesDescription,
  SingleBar,
  HeadContainer,
} from "./BarChartTile.styled";
import { useState } from "react";

export default function BarChartTile() {
  const { data: session } = useSession();
  const [isLastWeek, setIsLastWeek] = useState(true);

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  console.log(allEntries, isLoadingEntries, errorEntries);
  const { userEntries } = useData().fetchedUserEntries;
  const lastWeek = lastWeekAnalyser(session ? userEntries : allEntries);
  console.log("lastWeek", lastWeek);
  console.log("userEntries", userEntries);

  const visualizedData = isLastWeek
    ? experienceAnalyser(lastWeek)
    : experienceAnalyser(session ? userEntries : allEntries);

  const totalCount = visualizedData.totalCount;
  console.log(visualizedData.experiences);

  if (isLoadingEntries) return <p>Entries Loading</p>;
  if (errorEntries) return <p>Sorry, there was an error fetching entries</p>;

  function topTwoExperiencesAnalyser(data) {
    data.sort((a, b) => b.count - a.count);
    const topTwoExperiences = data.slice(0, 2);
    return topTwoExperiences;
  }

  const topTwoExperiences = topTwoExperiencesAnalyser(
    visualizedData.experiences
  );

  const emotionFirst =
    topTwoExperiences.length !== 0
      ? topTwoExperiences[0].experience
      : "NO DATA";
  const emotionSecond =
    topTwoExperiences.length !== 0
      ? topTwoExperiences[1].experience
      : "NO DATA";
  return (
    <BarChartContainer>
      <HeadContainer>
        <div>
          <LastWeekTogglePill
            onClick={() => {
              setIsLastWeek(!isLastWeek);
            }}
          >
            <span>Last Week</span>
          </LastWeekTogglePill>
        </div>
        <EntriesDescription>
          {totalCount} entries most are {emotionFirst} and {emotionSecond}
        </EntriesDescription>
      </HeadContainer>

      {visualizedData.experiences &&
        visualizedData.experiences.map(({ index, count, color }) => (
          <>
            <SingleBar
              key={index}
              color={color}
              barHeight={Math.floor((count / totalCount) * 100)}
            />
          </>
        ))}
    </BarChartContainer>
  );
}
