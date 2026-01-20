import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  const [time, setTime] = useState(() => DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => DateTime.now());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return time;
};
