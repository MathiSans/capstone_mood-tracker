import EntryTile from "../../Tiles/EntryTile/EntryTile";

export default function EntriesList({ data }) {
  if (!Array.isArray(data)) {
    console.error("Invalid data format. Expected an array but received:", data);
    return (
      <div style={{ padding: "16px", textAlign: "center", color: "white" }}>
        {data === null ? <p>No data available</p> : <p>Data is empty</p>}
      </div>
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
