import { TrackerContainer } from "@/styles";
import Form from "@/components/Form/Form";
import StyledEntryList from "@/components/EntryList/EntryList";

export default function Flow({ allEntries, handleSubmit, handleRangeChange }) {
  return (
    <TrackerContainer>
      <header>
        <h1>mood tracker</h1>
      </header>
      <Form onSubmit={handleSubmit} handleRangeChange={handleRangeChange} />
      <StyledEntryList allEntries={allEntries} />
    </TrackerContainer>
  );
}
