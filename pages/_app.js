import GlobalStyle from "../styles";
import { useState } from "react";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [rangeValue, setRangeValue] = useState(127.5);
  const [allEntries, setAllEntries] = useLocalStorageState("allEntries", {
    defaultValue: [],
  });

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const submittedForm = {
      id: nanoid(),
      experiences: [
        { anger: event.target.anger.checked },
        { enjoyment: event.target.enjoyment.checked },
        { fear: event.target.fear.checked },
        { disgust: event.target.disgust.checked },
        { sadness: event.target.sadness.checked },
      ],
      text: event.target.text.value,
      slider: rangeValue,

      date: new Date().toLocaleString(),
    };

    setAllEntries([...allEntries, submittedForm]);
    event.target.reset();
  }

  function deleteEntry(id) {
    console.log("APPJSID", id);
    setAllEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        allEntries={allEntries}
        handleSubmit={handleSubmit}
        handleRangeChange={handleRangeChange}
        deleteEntry={deleteEntry}
        {...pageProps}
      />
    </>
  );
}
