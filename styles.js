import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-main: ${(props) => props.theme.colors.dark};
    --color-main-alt: ${(props) => props.theme.colors.light};
    --color-neutral: ${(props) => props.theme.colors.neutral};
    --color-danger: ${(props) => props.theme.colors.danger};

    --font-main: ${(props) => props.theme.fonts.main};
    --font-serif: ${(props) => props.theme.fonts.serif};

    --font-size-default: ${(props) => props.theme.fontSize.default};
    --font-size-small: ${(props) => props.theme.fontSize.small};
    --font-size-large: ${(props) => props.theme.fontSize.large};
    --font-size-xl: ${(props) => props.theme.fontSize.xl};

    --font-weight-light: ${(props) => props.theme.fontWeight.light};
    --font-weight-normal: ${(props) => props.theme.fontWeight.normal};
    --font-weight-bold: ${(props) => props.theme.fontWeight.bold};

    --spacing-xs: ${(props) => props.theme.spacing.xs};
    --spacing-s: ${(props) => props.theme.spacing.s};
    --spacing-m: ${(props) => props.theme.spacing.m};
    --spacing-l: ${(props) => props.theme.spacing.l};
    --spacing-xl: ${(props) => props.theme.spacing.xl};
    --spacing-xxl: ${(props) => props.theme.spacing.xxl};
    --spacing-xxxl: ${(props) => props.theme.spacing.xxxl};

    --effect-box-shadow: ${(props) => props.theme.effects.boxShadow};
    --effect-drop-shadow: ${(props) => props.theme.effects.dropShadow};
    --effect-linear-gradient: ${(props) => props.theme.effects.linearGradient};
    --effect-radial-gradient: ${(props) => props.theme.effects.radialGradient};

    --border-radius-small: ${(props) => props.theme.borders.radiusSmall};
    --border-radius-medium: ${(props) => props.theme.borders.radiusMedium};
    --border-radius-large: ${(props) => props.theme.borders.radiusLarge};
    --border-radius-round: ${(props) => props.theme.borders.radiusRound};
    --border-strength: ${(props) => props.theme.borders.strength};
  }

  body {
    color: var(--color-main-alt); 
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--color-main); 
  }

  h2 {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-light);
  }
`;
