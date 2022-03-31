import fetch from "node-fetch";
import { useData } from "../../libs/use-fetch";

function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

export async function getData(id = 1, waitTime = 10000) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const json = await res.json();
  await wait(waitTime);
  return json;
}

export function Profile({ id, waitTime }) {
  const data = useData(`data-${id}`, () => getData(id, waitTime), { revalidate: true });

  return (
    <div>
      <h1>I am a server component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
