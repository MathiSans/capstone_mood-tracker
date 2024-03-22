import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";
//import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const darkTheme = {
  color: "white",
  backgroundColor: "black",
  bgColor2: "indigo",
};
const lightTheme = {
  color: "black",
  backgroundColor: "white",
  bgColor2: "lightblue",
};

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
          <Component {...pageProps} handleToggleTheme={handleToggleTheme} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
