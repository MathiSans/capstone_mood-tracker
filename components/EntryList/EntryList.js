import Entry from "../Entry/Entry";
import { EntryList } from "./EntryList.styled";

export default function StyledEntryList({ allEntries }) {
  console.log("styled entrylist", allEntries);
  return (
    <EntryList>
      <Entry allEntries={allEntries} />
    </EntryList>
  );
}
