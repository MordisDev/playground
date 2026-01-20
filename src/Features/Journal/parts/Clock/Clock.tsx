import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import { Text } from "@mordis-dev/components";

export const Clock = () => {
  const [time, setTime] = useState(() => DateTime.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => DateTime.now());
    }, 500);

    return () => clearInterval(interval);
  }, []);
  if (!time) return null;
  return (
    <Text $fontType="highlighted">
      {time.hour.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {time.minute.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {time.second.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
    </Text>
  );
};
