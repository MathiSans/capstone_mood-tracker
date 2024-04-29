import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function EntriesList({ data }) {
  const { data: session } = useSession();
  function getWeekdayName(date) {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    // Create a new Date object using the provided date string or timestamp
    const dateObj = new Date(date);

    // Get the day of the week (0-6)
    const dayOfWeek = dateObj.getDay();

    // Return the weekday name corresponding to the day of the week
    return weekdays[dayOfWeek];
  }

  // Example usage:
  const myDate = "2024-04-23"; // Date string in YYYY-MM-DD format
  const weekdayName = getWeekdayName(myDate);
  console.log("data", data);
  return (
    <>
      {data.map(({ _id, experience, time, color, intensity, reactions }) => (
        <Card key={_id}>
          <p>{time}</p>
          <p>
            {session ? "I felt" : "Somebody"}
            <DynamicCardSpan color={color}> {experience}</DynamicCardSpan> with
            the intensity of {intensity} .
          </p>
          <p>I reacted with {reactions}.</p>
          <ColorCircle color={color} />
        </Card>
      ))}
    </>
  );
}

const DynamicCardSpan = styled.span`
  color: ${(prop) => prop.color};
`;

const ColorCircle = styled.div`
  width: 100px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
`;

export const Card = styled.div`
  background: var(--effect-radial-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: var(--spacing-xl);
  position: relative;
  cursor: pointer;
  grid-column-end: span 4;
  grid-row-end: span 3;
`;

/*
            <Styled.Card onClick={() => router.push(`/entries/${entry._id}`)}>
              <Styled.ColoredShapeContainer>
                <Styled.ColoredShape color={entry.color} />
              </Styled.ColoredShapeContainer>
              <Styled.Sentence>
                {session ? (
                  "You "
                ) : (
                  <Styled.StaticText>Somebody </Styled.StaticText>
                )}
                {entry.location === "unknown" ? (
                  ""
                ) : (
                  <>
                    <Styled.StaticText>in </Styled.StaticText>
                    {entry.location.region}
                  </>
                )}
                <Styled.StaticText> felt</Styled.StaticText> {entry.experience}.{" "}
                <Styled.StaticText>More specifically</Styled.StaticText>{" "}
                <Intensity
                  value={entry.intensity}
                  experience={entry.experience}
                />
                <Styled.StaticText>
                  . You selected these tags:
                </Styled.StaticText>{" "}
                {entry.reactions.map((reaction, index, array) => (
                  <span key={index}>
                    {reaction}
                    {index < array.length - 1 && ", "}
                  </span>
                ))}
              </Styled.Sentence>
              <div>
                {filter === "lastWeek" ? (
                  <Styled.Sentence>{entry.time}</Styled.Sentence>
                ) : (
                  ""
                )}
              </div>

              <Styled.DeleteContainer>
                {deletingId === entry._id ? (
                  <>
                    <Styled.DeleteQuestion>
                      sure about deleting?
                    </Styled.DeleteQuestion>
                    <Styled.DeleteAnswer
                      red
                      onClick={(event) => handleDeleteEntry(event, entry._id)}
                    >
                      yes
                    </Styled.DeleteAnswer>
                    <Styled.DeleteAnswer
                      onClick={(event) => handleDeleteDialog(event, null)}
                    >
                      no
                    </Styled.DeleteAnswer>
                  </>
                ) : (
                  <>
                    <Styled.DeleteButton
                      as="a"
                      onClick={(event) => handleDeleteDialog(event, entry._id)}
                    >
                      <FiTrash2 />
                    </Styled.DeleteButton>
                  </>
                )}
              </Styled.DeleteContainer>
            </Styled.Card>

*/
