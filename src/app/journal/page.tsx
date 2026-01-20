"use client";

import Papa from "papaparse";
import { useEffect, useState, useMemo } from "react";

import { Journal } from "@/Features/Journal/Journal";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <main
      style={{
        maxWidth: "1320px",
        padding: "1.5rem 3rem",
        margin: "0 auto",
      }}
    >
      <Journal />
    </main>
  );
}
