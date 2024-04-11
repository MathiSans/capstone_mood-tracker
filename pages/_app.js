import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Overlay from "@/components/Overlay/Overlay";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

// Load environment variables from .env file
require("dotenv").config();

const theme = {
  colors: {
    dark: "black",
    light: "white",
    neutral: "grey",
    danger: "red",
  },
  fonts: {
    main: "system-ui",
    serif: "Cambria, Cochin, Georgia, Times, serif",
  },
  fontSize: {
    default: "1rem",
    small: "0.8rem",
    large: "2rem",
    xl: "3rem",
  },
  fontWeight: {
    light: "200",
    normal: "400",
    bold: "700",
  },
  spacing: {
    xs: "4px",
    s: "8px",
    m: "12px",
    l: "20px",
    xl: "28px",
    xxl: "32px",
    xxxl: "44px",
  },
  effects: {
    boxShadow: "",
    dropShadow: "",
    linearGradient: "-webkit-linear-gradient(#e3f710, #ff0000)",
    radialGradient:
      "radial-gradient(circle, rgba(42, 42, 42, 1) 0%, rgba(13, 13, 13, 1) 100%)",
  },
  borders: {
    radiusSmall: "12px",
    radiusMedium: "20px",
    radiusLarge: "100px",
    radiusRound: "50%",
    strength: "2px",
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <SessionProvider session={session}>
            <Overlay>
              <Component {...pageProps} />
            </Overlay>
          </SessionProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
