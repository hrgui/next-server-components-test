import fetch from "node-fetch";
import { useData } from "../../libs/use-fetch";

function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

export async function getData() {
  const res = await fetch(`https://swapi.dev/api/people/1`);
  const json = await res.json();
  await wait(10000);
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
