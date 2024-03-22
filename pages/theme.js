import { useState } from "react";
import styled from "styled-components";

export default function ThemeTest({ handleToggleTheme }) {
  const [isToggled, setIsToggled] = useState(false);

  //   const onToggle = () => {
  //     setIsToggled(!isToggled);
  //     handleToggleTheme();
  //   };
  return (
    <>
      <h1>Hello World</h1>
      <Box>
        <p>Box</p>
      </Box>
      <button
        onClick={() => {
          handleToggleTheme();
        }}
      >
        Toggle
      </button>
    </>
  );
}

const Box = styled.div`
  background-color: ${(prop) => prop.theme.bgColor2};
  color: ${(prop) => prop.theme.color};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
