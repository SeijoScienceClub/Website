"use client";
import { redirect, useSearchParams } from "next/navigation";

export default function Redirect() {
  let searchParams = useSearchParams();
  let code = searchParams.get("code");

  return (
    <div>
      <h1>Now Redirecting...</h1>
    </div>
  );
}
