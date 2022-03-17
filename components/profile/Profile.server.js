import fetch from "node-fetch";
import { useData } from "../../libs/use-fetch";

console.log(fetch);

export async function getData() {
  const res = await fetch(`https://swapi.dev/api/people/1`);
  const json = await res.json();
  console.log("called", json);
  return json;
}

//https://swapi.dev/api/people/1
export function Profile() {
  const data = useData("data", () => getData(), { revalidate: true });

  return <div>{JSON.stringify(data)}</div>;
}
