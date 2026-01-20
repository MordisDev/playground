import type { DateTime } from "luxon";

export type Counter = {
  title: string;
  tags?: string[];
  scope: "day" | "exact";
  finnishTime: DateTime;
  startTime?: DateTime;
};
