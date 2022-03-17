import { Meow } from "../components/meow/Meow.client";
import { Suspense } from "react";
import { Profile } from "../components/profile/Profile.server";

export default function Test() {
  return (
    <div>
      Hello World
      <Meow />
      <Suspense fallback={"Loading..."}>
        <Profile />
      </Suspense>
    </div>
  );
}
