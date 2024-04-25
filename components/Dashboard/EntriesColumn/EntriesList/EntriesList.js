import EntryTile from "../../Tiles/EntryTile/EntryTile";

export default function EntriesList({ data }) {
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
