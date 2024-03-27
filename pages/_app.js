import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "black",
    light: "white",
    tertiary: "grey",
    danger: "red",
  },
  fonts: {
    body: "system-ui",
    controls: "monospace",
  },
  breakpoints: {
    //just examples
    small: "576px",
    medium: "768px",
    large: "992px",
    xlarge: "1200px",
  },
  spacing: {
    //just examples
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  effects: {
    //just examples
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    linearGradient: "linear-gradient(to right, #ff416c, #ff4b2b)",
    radialGradient: "radial-gradient(circle, #00ff00, #0000ff)",
  },
  borders: {
    //just examples
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
