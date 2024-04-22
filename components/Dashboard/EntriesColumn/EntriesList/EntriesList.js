import styled from "styled-components";

export default function EntriesList({ data }) {
  console.log("data", data);
  return (
    <>
      {data.map(({ _id, experience, time, color, intensity, reactions }) => (
        <Card key={_id}>
          I felt {experience}, the {color}, the intensity {intensity.toFixed(2)}{" "}
          and my reaction {reactions.join(", ")} at {time}.
        </Card>
      ))}
    </>
  );
}

export const Card = styled.div`
  background: var(--effect-radial-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
  border-radius: var(--border-radius-small);
  width: 100%;
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
