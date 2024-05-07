import AwesomeShapesProvider from "../AwesomeShapesProvider/AwesomeShapesProvider";
import * as Styled from "./Activity.styled";
import LinkWrapper from "@/components/LinkWrapper/LinkWrapper";
import { experiences } from "@/experiences";

export default function Activity({ activity }) {
  const isToolActivity =
    activity && activity.hasOwnProperty("tool") && activity.tool;
  const content = (
    <>
      <Styled.Container $withLink={activity.link}>
        <Styled.PillContainer>
          <Styled.Pill>
            <Styled.TileH3>
              {isToolActivity ? "Tool" : "Activity"}
            </Styled.TileH3>
          </Styled.Pill>
          {activity.user && (
            <Styled.Pill>
              <Styled.TileH3>community made</Styled.TileH3>
            </Styled.Pill>
          )}
        </Styled.PillContainer>
        <Styled.Title>{activity.title}</Styled.Title>
        <Styled.ActivityDescription>
          {activity.description}
        </Styled.ActivityDescription>
      </Styled.Container>
      <Styled.ForEmotionContainer>
        {activity.forEmotion.map((emotion, index) => {
          const experience = experiences.find((exp) => exp.name === emotion);
          const color = experience ? experience.color : "grey";
          return (
            <Styled.Emotion key={index} $color={color}>
              {emotion}
            </Styled.Emotion>
          );
        })}
      </Styled.ForEmotionContainer>
      <Styled.ShapeContainer>
        <AwesomeShapesProvider />
      </Styled.ShapeContainer>
    </>
  );

  return (
    <>
      {activity.link ? (
        <LinkWrapper link={activity.link}>{content}</LinkWrapper>
      ) : (
        content
      )}
    </>
  );
}
