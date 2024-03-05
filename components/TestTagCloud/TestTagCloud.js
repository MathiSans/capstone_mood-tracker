import { useState } from "react";
import * as Styled from "./TestTagCloud.styled";
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
      {/* <div>
        <strong>Selected Tags:</strong>{" "}
        {selectedTags.map((tag) => tag.name).join(", ")}
      </div> */}
    </Styled.TagCloud>
  );
}

// import React, { useState } from "react";
// import * as Styled from "./TestTagCloud.styled";
// import { nanoid } from "nanoid";

// export default function TestTagCloud({
//   toggleSelectedTag,
//   data,
//   activeIndex,
//   setActiveIndex,
//   setColor,
//   handleColorChange,
// }) {
//   function handleClick(index, tag) {
//     if (activeIndex === index) {
//       toggleSelectedTag(index, tag);
//       setActiveIndex(null);
//       setColor("grey");
//     } else {
//       toggleSelectedTag(index, tag);
//       setActiveIndex(index);
//       handleColorChange(tag.color);
//     }
//   }

//   return (
//     <Styled.TagCloud>
//       {data.map((tag, index) => {
//         return (
//           <Styled.Button
//             onClick={() => {
//               handleClick(index, tag);
//             }}
//             active={activeIndex === index}
//             color={tag.color}
//             key={nanoid()}
//           >
//             {tag.name}
//           </Styled.Button>
//         );
//       })}
//     </Styled.TagCloud>
//   );
// }
