import { nanoid } from "nanoid";
import Intensity from "@/utils/intensity";
import {
  EntryList,
  Entry,
  SliderText,
  ExperienceText,
  EntryText,
  Separator,
} from "./EntryList.styled";

export default function StyledEntryList({ allEntries }) {
  console.log("styled entrylist", allEntries);
  return (
    <EntryList>
      {allEntries.map((entry) => {
        return (
          <Entry key={entry.id}>
            <small>{entry.date}</small>
            <p>
              You felt{" "}
              <SliderText>
                <Intensity intensity={entry.slider} />.
              </SliderText>{" "}
              You selected these tags:{" "}
              <ExperienceText>
                {entry.experiences
                  .filter((experience) => Object.values(experience)[0])
                  .map((experience, index, array) => (
                    <span key={nanoid()}>
                      {Object.keys(experience)[0]}
                      {index < array.length - 1 && ", "}
                    </span>
                  ))}
              </ExperienceText>
              <span>. You wrote:</span> <EntryText>{entry.text}</EntryText>
            </p>
            <Separator />
          </Entry>
        );
      })}
    </EntryList>
  );
}
