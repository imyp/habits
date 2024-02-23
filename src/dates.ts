function firstDayOf(year: number) {
  return new Date(Date.UTC(year, 0, 1, 0, 0, 0));
}

function isBefore(query: Date, target: Date) {
  return target.getTime() - query.getTime() > 24 * 60 * 60 * 1000;
}

function isSameDate(first: Date, second: Date) {
  return (
    first.getUTCFullYear() === second.getUTCFullYear() &&
    first.getUTCMonth() === second.getUTCMonth() &&
    first.getUTCDate() === second.getUTCDate()
  );
}

function increaseDay(d: Date) {
  const newDate = new Date(d.valueOf());
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
}

function decreaseDay(d: Date) {
  const newDate = new Date(d.valueOf());
  newDate.setDate(newDate.getDate() - 1);
  return newDate;
}

function fromMonday(fromSunday: number) {
  if (fromSunday === 0) return 6;
  return fromSunday - 1;
}

export function getYearDays(year: number) {
  let startDay = firstDayOf(year);
  const dayOfTheWeek = fromMonday(startDay.getUTCDay());
  for (let i = 0; i < dayOfTheWeek; i++) {
    startDay = decreaseDay(startDay);
  }
  const days = [startDay];
  while (days.length < 7 * 53) {
    days.push(increaseDay(days.at(-1)!));
  }
  const today = new Date();
  return days.map((d) => ({
    isoString: d.toISOString(),
    isSelectedYear: d.getUTCFullYear() === year,
    isToday: isSameDate(d, today),
    isInPast: isBefore(d, today),
    done: false,
  }));
}
