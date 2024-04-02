import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
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
      </SessionProvider>
    </>
  );
}
