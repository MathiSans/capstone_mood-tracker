import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
  margin: 0;
  padding: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: var(--color-main-alt); 
    font-family: var(--font-main);
    background-color: var(--color-main); 
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  :root {
    ${(props) => {
      const { colors, fonts, fontSize, fontWeight, spacing, effects, borders } =
        props.theme;

      return `
        --color-main: ${colors.black};
        --color-main-alt: ${colors.light};
        --color-dark: ${colors.dark};
        --color-neutral: ${colors.neutral};
        --color-danger: ${colors.danger};

        --font-main: ${fonts.main};
        --font-serif: ${fonts.serif};

        --font-size-default: ${fontSize.default};
        --font-size-small: ${fontSize.small};
        --font-size-large: ${fontSize.large};
        --font-size-xl: ${fontSize.xl};

        --font-weight-light: ${fontWeight.light};
        --font-weight-normal: ${fontWeight.normal};
        --font-weight-bold: ${fontWeight.bold};

        --spacing-xs: ${spacing.xs};
        --spacing-s: ${spacing.s};
        --spacing-m: ${spacing.m};
        --spacing-l: ${spacing.l};
        --spacing-xl: ${spacing.xl};
        --spacing-xxl: ${spacing.xxl};
        --spacing-xxxl: ${spacing.xxxl};

        --effect-box-shadow: ${effects.boxShadow};
        --effect-drop-shadow: ${effects.dropShadow};
        --effect-linear-gradient: ${effects.linearGradient};
        --effect-radial-gradient: ${effects.radialGradient};

        --border-radius-small: ${borders.radiusSmall};
        --border-radius-medium: ${borders.radiusMedium};
        --border-radius-large: ${borders.radiusLarge};
        --border-radius-round: ${borders.radiusRound};
        --border-strength: ${borders.strength};
      `;
    }}
  }


`;
