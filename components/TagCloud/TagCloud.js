import * as Styled from "./TagCloud.styled";
import { nanoid } from "nanoid";

export default function TestTagCloud({
  onSelectTag,
  selectedTags,
  tags,
  colorSelected,
  allowMultiple,
}) {
  const toggleTag = (tag) => {
    if (allowMultiple) {
      onSelectTag(
        selectedTags.includes(tag)
          ? selectedTags.filter((selectedTag) => selectedTag !== tag)
          : [...selectedTags, tag]
      );
    } else {
      onSelectTag([tag]);
    }
  };

  return (
    <Styled.TagCloud>
      {tags.map((tag) => (
        <Styled.Button
          key={nanoid()}
          onClick={() => toggleTag(tag)}
          style={{
            backgroundColor:
              colorSelected &&
              selectedTags.some((selectedTag) => selectedTag.name === tag.name)
                ? tag.color || "rgba(255, 255, 255, 0.2)"
                : "transparent",
          }}
        >
          {tag.name}
        </Styled.Button>
      ))}
    </Styled.TagCloud>
  );
}
