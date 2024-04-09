import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Overlay from "@/components/Overlay/Overlay";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Overlay />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
