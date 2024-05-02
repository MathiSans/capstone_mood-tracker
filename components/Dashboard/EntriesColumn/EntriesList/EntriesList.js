import EntryTile from "../../Tiles/EntryTile/EntryTile";
import { NoDataContainer } from "./EntriesList.styled";

export default function EntriesList({ data }) {
  if (!Array.isArray(data)) {
    console.error("Invalid data format. Expected an array but received:", data);
    return (
      <NoDataContainer>
        {data === null ? <p>No data available</p> : <p>Data is empty</p>}
      </NoDataContainer>
    );
  }
  return (
    <>
      {data.map(
        ({
          _id,
          experience,
          time,
          color,
          intensity,
          reactions,
          location,
          region,
        }) => (
          <EntryTile
            key={_id}
            experience={experience}
            time={time}
            color={color}
            intensity={intensity}
            reactions={reactions}
            entryUrl={_id}
            location={location}
            region={region}
          />
        )
      )}
    </>
  );
}
