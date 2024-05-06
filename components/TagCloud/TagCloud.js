import * as Styled from "./TagCloud.styled";

export default function TagCloud({
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
      {tags.map((tag, index) => (
        <Styled.Button
          key={index}
          onClick={() => toggleTag(tag)}
          $active={
            colorSelected &&
            selectedTags.some((selectedTag) => selectedTag.name === tag.name)
          }
          $color={
            colorSelected &&
            selectedTags.some((selectedTag) => selectedTag.name === tag.name)
              ? tag.color || "rgba(0, 0, 0, 0.1)"
              : "transparent"
          }
        >
          {tag.name}
        </Styled.Button>
      ))}
    </Styled.TagCloud>
  );
}
