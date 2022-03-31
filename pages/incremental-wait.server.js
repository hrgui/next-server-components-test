import React from "react";
import { Suspense } from "react";
import { Profile } from "../components/profile/Profile.server";

export default function Page() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div style={{ width: "33vw" }}>
        <Suspense fallback={"After 5 seconds, I will disappear."}>
          <Profile waitTime={5000} id={1} />
        </Suspense>
      </div>
      <div style={{ width: "33vw" }}>
        <Suspense fallback={"After 10 seconds, I will disappear."}>
          <Profile waitTime={10000} id={2} />
        </Suspense>
      </div>
      <div style={{ width: "33vw" }}>
        <Suspense fallback={"After 15 seconds, I will disappear"}>
          <Profile waitTime={15000} id={3} />
        </Suspense>
      </div>
    </div>
  );
}
