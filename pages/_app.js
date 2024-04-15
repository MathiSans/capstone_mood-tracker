import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Overlay from "@/components/Overlay/Overlay";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles.js";
import { SessionProvider } from "next-auth/react";

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
