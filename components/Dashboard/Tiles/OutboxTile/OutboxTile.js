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
}) {
  return (
    <Styled.Container>
      {" "}
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
    </Styled.Container>
  );
}
