import { useEffect } from "react";

export default function IncreaseVolume({
  pageIndex,
  currentVolume,
  setCurrentVolume,
}) {
  useEffect(() => {
    if (pageIndex === 2) {
      const IncreaseVolume = setInterval(() => {
        if (currentVolume > 0) {
          setCurrentVolume((currentVolume) =>
            Math.max(0.3, currentVolume + 0.01)
          );
        }
      }, 50);

      return () => clearInterval(IncreaseVolume);
    }
  }, [pageIndex, currentVolume, setCurrentVolume]);
}
