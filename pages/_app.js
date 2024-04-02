import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "black",
    light: "white",
    neutral: "grey",
    danger: "red",
  },
  fonts: {
    body: "system-ui",
    serif: "Cambria, Cochin, Georgia, Times, serif",
  },
  fontsize: {
    default: "1rem",
    small: "0.8rem",
    large: "2rem",
    xl: "3rem",
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
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", //just example
    linearGradient: "-webkit-linear-gradient(#e3f710, #ff0000)",
    radialGradient:
      "radial-gradient(circle, rgba(42, 42, 42, 1) 0%, rgba(13, 13, 13, 1) 100%)", //in use
  },
  borders: {
    radiusSmall: "0.75rem",
    radiusMedium: "1.25rem",
    radiusLarge: "6.25rem",
    radiusRound: "50%",
    strength: "2px",
    color: "#333333",
  },
};

export default function App({ Component, pageProps }) {
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
