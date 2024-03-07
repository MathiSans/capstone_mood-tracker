export default function onSubmit(event) {
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
