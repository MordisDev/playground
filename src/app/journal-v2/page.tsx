"use client";

import { Box, Heading, Highlight, Text } from "@mordis-dev/components";

import { Clock } from "@/Features/Journal/parts/Clock";
import { DateSummary } from "@/Features/Journal/parts/DateSummary";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1320px",
        padding: "1.5rem 3rem",
        margin: "0 auto",
      }}
    >
      <Box>
        <Clock />
        <DateSummary />
      </Box>
    </main>
  );
}
