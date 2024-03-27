import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "styled-components";
//import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const darkTheme = {
  color: "white",
  backgroundColor: "black",
  bgColor2: "indigo",
  borderColor: "lime",
  Navigation: {
    backgroundColor: "rgb(0, 0, 0)",
    backgroundGradient:
      "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 33%, rgba(0, 0, 0, 0) 100%)",
  },
  ActivityCard: {
    backgroundColor: "#141414",
    backgroundColor2: "rgb(42, 42, 42)",
    backgroundGradient:
      "radial-gradient(circle,rgba(42, 42, 42, 1) 0%,rgba(13, 13, 13, 1) 100%)",
    button: "white",
    buttonTextLink: "black",
  },
  Guide: {
    color: "white",
  },
  EntriesList: {
    cardBackgroundColor: "white",
    cardBoxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    cardBG2: "rgb(42, 42, 42);",
    cardBackGroundGradient:
      "radial-gradient(circle, rgba(42, 42, 42, 1) 0%, rgba(13, 13, 13, 1) 100%)",
  },
};
const lightTheme = {
  color: darkTheme.backgroundColor,
  backgroundColor: "white",
  bgColor2: "lightblue",
  borderColor: "pink",
  Navigation: {
    backgroundColor: "white",
    backgroundGradient:
      "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 33%, rgba(0, 0, 0, 0) 100%)",
    button: "black",
    buttonTextLink: "black",
  },
  ActivityCard: {
    backgroundColor: "#efecec",
    backgroundColor2: "rgb(215, 213, 213)",
    backgroundGradient:
      "radial-gradient(circle,rgba(238, 236, 236, 1) 0%,rgba(252, 251, 251, 1) 100%)",
  },
  Guide: {
    color: "white",
  },
  EntriesList: {
    cardBackgroundColor: "white",
    cardBoxShadow:
      "rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    cardBG2: "rgb(42, 42, 42);",
    cardBackGroundGradient:
      "radial-gradient(circle, rgba(42, 42, 42, 1) 0%, rgba(13, 13, 13, 1) 100%)",
  },
};

/* background-color: #141414;
  background: rgb(42, 42, 42);
  background: radial-gradient(
    circle,
    rgba(42, 42, 42, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );*/

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useLocalStorageState("dark");
  const isDarkTheme = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Layout>
            <Component {...pageProps} handleToggleTheme={handleToggleTheme} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
