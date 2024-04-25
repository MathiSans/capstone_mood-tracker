import EntryTile from "../../Tiles/EntryTile/EntryTile";

export default function EntriesList({ data }) {
  console.log("data", data);
  return (
    <>
      {data &&
        data.map(
          ({
            _id,
            experience,
            time,
            color,
            intensity,
            reactions,
            location,
          }) => {
            return (
              <EntryTile
                key={_id}
                experience={experience}
                time={time}
                color={color}
                intensity={intensity}
                reactions={reactions}
                entryUrl={_id}
                location={location}
              />
            );
          }
        )}
    </>
  );
}
