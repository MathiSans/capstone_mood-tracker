import EntryTile from "../../Tiles/EntryTile/EntryTile";

export default function EntriesList({ data, onEntryRender }) {
  console.log("data", data);
  return (
    <>
      {data.map(({ _id, experience, time, color, intensity, reactions }) => {
        // onEntryRender(_id);
        return (
          <EntryTile
            key={_id}
            experience={experience}
            time={time}
            color={color}
            intensity={intensity}
            reactions={reactions}
            entryUrl={_id}
          />
        );
      })}

    </>
  );
}
