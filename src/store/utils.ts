import { DateTime } from "luxon";

export const getNextUpcomingDate = ({
  day,
  month,
}: {
  day: number;
  month: number;
}): DateTime => {
  const today = DateTime.now();
  const requestedDate = DateTime.fromObject({ day, month });

  return requestedDate > today
    ? requestedDate
    : requestedDate.plus({ years: 1 });
};
