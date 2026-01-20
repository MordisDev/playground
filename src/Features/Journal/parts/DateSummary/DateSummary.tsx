import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import { Text } from "@mordis-dev/components";
import { spacing } from "@/forExport/spacing";

export const DateSummary = () => {
  const currentDate = DateTime.now();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: spacing["3xs"] }}
    >
      <h4>Today is: {currentDate.weekdayLong}</h4>
      <p>
        {currentDate.day} {currentDate.monthLong} {currentDate.year}
      </p>
      <p>Week: {currentDate.weekNumber}</p>
      <p>Extended:</p>
      <p>Sunrise: [sunrise] Sunset: [sunset]</p>
      <p>There is hours:minutes:seconds of sunlight today</p>
      <p>No of days till longest/shortest day</p>
    </div>
  );
};

//By attributing our work with a backlink to https://simplemaps.com/data/world-cities.
