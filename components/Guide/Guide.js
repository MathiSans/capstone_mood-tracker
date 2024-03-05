export default function Guide({ text, bigger }) {
  return <h2 style={{ fontSize: `${bigger ? "3rem" : ""}` }}>{text}</h2>;
}
