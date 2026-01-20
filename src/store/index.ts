import { create } from "zustand";

import { getNextUpcomingDate } from "./utils";
import type { Counter } from "./types";

type JournalState = {
  counters: Counter[];
};

export const useJournalStore = create<JournalState>()(() => ({
  counters: [
    {
      title: "Easter",
      tags: ["holidays"],
      scope: "day",
      finnishTime: getNextUpcomingDate({ day: 20, month: 4 }),
    },
    {
      title: "Christmas",
      tags: ["holidays"],
      scope: "day",
      finnishTime: getNextUpcomingDate({ day: 24, month: 12 }),
    },
    {
      title: "Halloween",
      tags: ["holidays"],
      scope: "day",
      finnishTime: getNextUpcomingDate({ day: 31, month: 10 }),
    },
    {
      title: "Kids Day",
      tags: ["holidays"],
      scope: "day",
      finnishTime: getNextUpcomingDate({ day: 1, month: 6 }),
    },
  ],
}));
