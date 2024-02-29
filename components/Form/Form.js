import * as Styled from "./Form.styled";

export default function Form({ onSubmit, rangeValue, handleRangeChange }) {
  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.SliderContainer>
        <Styled.Emote>😔</Styled.Emote>
        <Styled.Input
          type="range"
          name="slider"
          rangeValue={rangeValue}
          onChange={handleRangeChange}
          min={0}
          max={255}
        ></Styled.Input>
        <Styled.Emote>🤩</Styled.Emote>
      </Styled.SliderContainer>
      <p>Select how you feel:</p>
      <Styled.TagCloud>
        <Styled.CheckboxLabel htmlFor="anger">
          Anger
          <Styled.Checkbox type="checkbox" name="anger" id="anger" />
        </Styled.CheckboxLabel>
        <Styled.CheckboxLabel htmlFor="fear">
          Fear
          <Styled.Checkbox type="checkbox" name="fear" id="fear" />
        </Styled.CheckboxLabel>
        <Styled.CheckboxLabel htmlFor="enjoyment">
          Enjoyment
          <Styled.Checkbox type="checkbox" name="enjoyment" id="enjoyment" />
        </Styled.CheckboxLabel>
        <Styled.CheckboxLabel htmlFor="disgust">
          Disgust
          <Styled.Checkbox type="checkbox" name="disgust" id="disgust" />
        </Styled.CheckboxLabel>
        <Styled.CheckboxLabel htmlFor="sadness">
          Sadness
          <Styled.Checkbox type="checkbox" name="sadness" id="sadness" />
        </Styled.CheckboxLabel>
      </Styled.TagCloud>

      <Styled.TextArea name="text" placeholder="What's on your mind today?" />
      <Styled.Button type="submit">Submit</Styled.Button>
      <Styled.Separator />
    </Styled.Form>
  );
}
