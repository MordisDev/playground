import type { DateTime } from "luxon";

import { Text } from "@mordis-dev/components";

import type { Counter } from "@/store/types";

export type TimeLeftProps = Counter & {
  currentTime: DateTime;
};

export const TimeLeft = ({
  title,
  currentTime,
  finnishTime,
}: TimeLeftProps) => {
  const timeLeft = finnishTime.diff(currentTime);
  return (
    <Text $fontType="large">
      {title}: {timeLeft.toFormat("M 'months,' d 'days")}
    </Text>
  );
};
