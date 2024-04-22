import { Grid } from "../Dashboard.styled";
import Link from "next/link";

export default function EntriesColumn() {
  const boxes = [
    { gridColumnEnd: "span 4", gridRowEnd: "span 3" },
    { gridColumnEnd: "span 4", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 1", gridRowEnd: "span 1" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
    { gridColumnEnd: "span 2", gridRowEnd: "span 2" },
  ];

  return (
    <Grid>
      {boxes.map((box, index) => (
        <Link
          href="/newentry"
          key={index}
          style={{
            // background: "var(--effect-radial-gradient)",
            background: "var(--color-neutral)",
            borderRadius: "var(--border-radius-small)",
            height: "100%",
            width: "100%",
            gridColumnEnd: box.gridColumnEnd,
            gridRowEnd: box.gridRowEnd,
          }}
        />
      ))}
    </Grid>
  );
}
