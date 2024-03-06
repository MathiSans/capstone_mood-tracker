import EntryList from "@/components/EntryList/EntryList";

export default function EntriesPage({ allEntries, onDeleteEntry }) {
  return <EntryList allEntries={allEntries} onDeleteEntry={onDeleteEntry} />;
}
