import * as S from "@/components/styled";
import EmoteUnpleasant from "../Emotes/EmoteUnpleasant";
import EmotePleasant from "../Emotes/EmotePleasant";
import Slider from "../Slider/Slider";
import Guide from "..//Guide/Guide";
import TagCloud from "../TagCloud/TagCloud";
import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";
import Separator from "../Separator/Separator";

export default function Form({ onSubmit, handleRangeChange }) {
  return (
    <S.Form onSubmit={onSubmit}>
      <div>
        <EmoteUnpleasant />
        <Slider onChange={handleRangeChange} />
        <EmotePleasant />
      </div>
      <Guide>Select how you feel:</Guide>
      <TagCloud />
      <TextBox />
      <Button />
      <Separator />
    </S.Form>
  );
}
