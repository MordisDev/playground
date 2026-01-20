"use client";

import { useEffect, useState } from "react";

import { Box, Heading, Text } from "@mordis-dev/components";

import {
  FeatureDescription,
  featureDescriptions,
} from "@/components/FeatureDescription";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <>
      <header
        style={{
          width: "1320px",
          padding: "1.5rem 3rem",
          margin: "0 auto",
        }}
      >
        <Heading type="main">MORDIS PLAYGROUND</Heading>
        <Text $fontType="large">
          Welcome to my playground. This site will work as a hub to all of the
          projects I feel like playing with, to train my programing skills and
          basically have fun. If by any chance you found this page feel free to
          look around, checkout mthe things I created or am creating and feel
          free to use them to your liking.
        </Text>
      </header>
      <main
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          //gridAutoRows: "200px",
          gap: "3rem",
        }}
      >
        {featureDescriptions.map((featureDescription, index) => (
          <FeatureDescription key={index} {...featureDescription} />
        ))}
      </main>
    </>
  );
}
