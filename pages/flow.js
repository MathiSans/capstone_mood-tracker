import { TrackerContainer } from "@/styles";
import Form from "@/components/Form/Form";
import EntryList from "@/components/EntryList/EntryList";

export default function Flow({
  allEntries,
  handleSubmit,
  handleRangeChange,
  onDeleteEntry,
}) {
  return (
    <TrackerContainer>
      <header>
        <h1>mood tracker</h1>
      </header>
      <Form onSubmit={handleSubmit} handleRangeChange={handleRangeChange} />
      <EntryList allEntries={allEntries} onDeleteEntry={onDeleteEntry} />
    </TrackerContainer>
  );
}
