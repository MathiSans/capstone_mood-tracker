import { Grid } from "../Dashboard.styled";
import BarChartTile from "../Tiles/BarChartTile/BarChartTile";
import { useState } from "react";
import EntriesList from "./EntriesList/EntriesList";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import lastWeekAnalyser from "@/utils/lastWeekAnalyser";

export default function EntriesColumn() {
  const [isLastWeek, setIsLastWeek] = useState(true);
  const { data: session } = useSession();

  const { allEntries, isLoadingEntries, errorEntries } =
    useData().fetchedAllEntries;
  const { userEntries } = useData().fetchedUserEntries;
  const lastWeek = lastWeekAnalyser(session ? userEntries : allEntries);
  console.log(lastWeek);

  return (
    <Grid>
      <BarChartTile setIsLastWeek={setIsLastWeek} isLastWeek={isLastWeek} />

      {isLastWeek && (
        <EntriesList
          data={lastWeek}
          setIsLastWeek={setIsLastWeek}
          isLastWeek={isLastWeek}
        />
      )}
      {!isLastWeek && session && (
        <EntriesList
          data={userEntries}
          setIsLastWeek={setIsLastWeek}
          isLastWeek={isLastWeek}
        />
      )}
      {!isLastWeek && !session && (
        <EntriesList
          data={allEntries}
          setIsLastWeek={setIsLastWeek}
          isLastWeek={isLastWeek}
        />
      )}
    </Grid>
  );
}
