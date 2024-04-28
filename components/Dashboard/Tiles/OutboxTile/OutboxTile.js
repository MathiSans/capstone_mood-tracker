import * as Styled from "./OutboxTile.styled";

export default function OutboxTile({
  handleSubmit,
  setFlowers,
  setHug,
  setSend,
  setInviteActivity,
  getUserName,
  isLoadingActivities,
  activities,
  send,
  friendsEntry,
  searchValue,
  latestFriendsEntries,
  handleGetUsername,
  isLoadingAllUsers,
}) {
  return (
    <Styled.Container>
      <h2>OUTBOX</h2>{" "}
      <form onSubmit={handleSubmit}>
        <button
          onClick={() => {
            setFlowers("💐");
            setSend("💐");
          }}
        >
          Send Flowers 💐
        </button>
        <button
          onClick={() => {
            setHug("🤗");
            setSend("🤗");
          }}
        >
          Send Hugs 🤗
        </button>
        <b>
          {"       "}to{" "}
          <span style={{ color: "yellow" }}>
            {getUserName ? getUserName.name : "no username"}
          </span>
        </b>

        <b>
          {"       "}Invite{" "}
          <span style={{ color: "yellow" }}>
            {getUserName ? getUserName.name : "no username"}
          </span>{" "}
          to{" "}
          <select
            onChange={(event) => {
              setInviteActivity(event.target.value);
              setSend(event.target.value);
            }}
          >
            <option value={false}>--choose activity--</option>
            {!isLoadingActivities &&
              activities.map(({ _id, title, emoji }) => (
                <option key={_id} value={`${title} ${emoji}`}>
                  {title}
                </option>
              ))}
          </select>
          Activity
        </b>
        <h1>{send}</h1>
        <br />

        <button type="submit">Send</button>
      </form>
      {/* <section>
        {searchValue === ""
          ? ""
          : friendsEntry && (
              <p>
                Your friend{" "}
                <b style={{ color: "lightblue" }}>{getUserName.name}</b> felt on{" "}
                <b style={{ color: "lightblue" }}>{friendsEntry.time}</b>
                {"  "}
                <b style={{ color: friendsEntry.color }}>
                  {friendsEntry.experience}
                </b>
              </p>
            )}
      </section> */}
      <div style={{ paddingBottom: "6rem" }}>
        {latestFriendsEntries.map(
          ({ experience, reactions, _id, time, user, color }) => {
            return (
              <p
                key={_id}
                style={{ padding: "5px", boxShadow: `2px 2px 4px ${color}` }}
              >
                <b>{!isLoadingAllUsers && handleGetUsername(user)}</b> felt on{" "}
                <b>{time}</b> <b>{experience}.</b>
                {"  "} Reaction:
                <b>{reactions}</b>
              </p>
            );
          }
        )}
      </div>
    </Styled.Container>
  );
}
