import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "8px" }}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/client-only">
        <a>Client Only</a>
      </Link>
      <Link href="/mixed">
        <a>Mixed</a>
      </Link>
      <Link href="/server-only">
        <a>Server Only</a>
      </Link>
    </nav>
  );
}
