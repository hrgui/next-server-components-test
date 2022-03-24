import fetch from "node-fetch";
import { useData } from "../../libs/use-fetch";

export async function getData() {
  const res = await fetch(`https://swapi.dev/api/people/1`);
  const json = await res.json();
  return json;
}

export function Profile() {
  const data = useData("data", () => getData(), { revalidate: true });

  return (
    <div>
      <h1>I am a server component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
