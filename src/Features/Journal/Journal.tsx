"use client";

import { DateTime } from "luxon";

import { Box, Heading, Highlight, Text } from "@mordis-dev/components";

import { useJournalStore } from "@/store";
import { useCurrentTime } from "@/hooks/currentTime";

import { Clock } from "./parts/Clock";
import { TimeLeft } from "./parts/TimeLeft";
import { CitySelect } from "./parts/CitySelect";

export const Journal = () => {
  const currentDate = DateTime.now();

  const { counters } = useJournalStore();

  const time = useCurrentTime();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box $centered>
        <Heading type="main">Heading!!!</Heading>
        <Text $fontType="large">
          Its: <Highlight>{currentDate.weekdayLong}</Highlight>,{" "}
          <Highlight>
            {currentDate.day} {currentDate.monthLong} {currentDate.year}
          </Highlight>
          , week: <Highlight>{currentDate.weekNumber}</Highlight>
        </Text>
        <Clock />
      </Box>
      <Box $bordered $paddingType="tight">
        {counters.map((counter, index) => (
          <TimeLeft key={index} currentTime={time} {...counter} />
        ))}
      </Box>
    </div>
  );
};
