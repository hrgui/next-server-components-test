import ServerHelloWorld from "../components/HelloWorld";

export default function Test() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div style={{ width: "33vw" }}>
        <ServerHelloWorld />
      </div>
    </div>
  );
}
