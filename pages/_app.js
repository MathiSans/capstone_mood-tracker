import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Overlay from "@/components/Overlay/Overlay";
import { useGlobalState } from "@/utils/useGlobalState";

export default function App({ Component, pageProps }) {
  const globalState = useGlobalState();
  //   const [currentVolume, setCurrentVolume] = useState(0.3);
  //   const [isMuted, setIsMuted] = useState(false);
  //   const audioReference = useRef(null);
  //   console.log(typeof setIsMuted);
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
        <Component {...pageProps} globalState={globalState} />
      </SWRConfig>
    </>
  );
}
