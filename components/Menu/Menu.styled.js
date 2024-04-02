import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.l};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;

// import styled from 'styled-components';

// const Element = styled.div`
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: rgba(255, 255, 255, 0.5); /* Adjust the alpha value to control the blur intensity */
//     backdrop-filter: blur(16px);
//     z-index: -1;
//   }
// `;

// Then use the Element component in your React application

// For Safari on iOS, which doesn't support `backdrop-filter` directly, you can achieve a similar effect using CSS masks. Here's an alternative approach:

// ```css
// .element {
//   position: relative;
// }

// .element::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-image: url('your-background-image.jpg'); /* or any other background */
//   filter: blur(16px);
//   -webkit-filter: blur(16px);
//   z-index: -1;
//   -webkit-mask-image: -webkit-radial-gradient(white, black);
//   mask-image: radial-gradient(white, black);
// }
// ```

// This code applies a blur effect to the background using `filter` and `mask-image` properties, which are supported by Safari on iOS. Adjust the blur radius and background image as needed. This technique essentially creates a blurred overlay with a gradient mask to mimic the `backdrop-filter` effect.

// or this
// .element {
//   position: relative;
// }

// .element::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: rgba(255, 255, 255, 0.5); /* Adjust the alpha value to control the blur intensity */
//   backdrop-filter: blur(16px);
//   z-index: -1;
// }
