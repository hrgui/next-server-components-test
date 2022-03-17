import { useState } from "react";

export function Meow() {
  const [c, setC] = useState(0);

  return (
    <h1>
      Meow-only-on-client <button onClick={() => setC(c + 1)}>{c}</button>
    </h1>
  );
}
