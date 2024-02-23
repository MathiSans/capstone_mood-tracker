import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ color: "white" }}>Working title: Mood Diary</h1>
      <Link
        style={{ color: "white" }}
        href={"https://github.com/MathiSans/mood-diary"}
      >
        <small>Github</small>
      </Link>
    </div>
  );
}
