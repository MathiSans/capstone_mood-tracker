import { TagCloud } from "./TagCloud.styled";

export default function StyledTagCloud() {
  return (
    <TagCloud>
      <label htmlFor="anger">
        Anger
        <input type="checkbox" name="anger" id="anger" />
      </label>
      <label htmlFor="fear">
        Fear
        <input type="checkbox" name="fear" id="fear" />
      </label>
      <label htmlFor="enjoyment">
        Enjoyment
        <input type="checkbox" name="enjoyment" id="enjoyment" />
      </label>
      <label htmlFor="disgust">
        Disgust
        <input type="checkbox" name="disgust" id="disgust" />
      </label>
      <label htmlFor="sadness">
        Sadness
        <input type="checkbox" name="sadness" id="sadness" />
      </label>
    </TagCloud>
  );
}
