export default function TestFlowContainer({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "180px",
      }}
    >
      {children}
    </div>
  );
}
