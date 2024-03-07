import { useEffect } from "react";

export default function DecreaseVolume({
  pageIndex,
  currentVolume,
  setCurrentVolume,
}) {
  useEffect(() => {
    console.log("volume:", currentVolume);
    console.log("pageIndex:", pageIndex);

    if (pageIndex > 1) {
      const decreaseVolume = setInterval(() => {
        if (currentVolume > 0) {
          setCurrentVolume((previousVolume) =>
            Math.max(0, previousVolume - 0.01)
          );
        }
      }, 50);

      return () => clearInterval(decreaseVolume);
    }
  }, [pageIndex, currentVolume, setCurrentVolume]);
}
