import { useContext } from "react";
import { DoneContext } from "../contexts";
export interface DayType {
  done: boolean;
  isoString: string;
  isSelectedYear: boolean;
  isToday: boolean;
  isInPast: boolean;
}

export function Day({ day }: { day: DayType }) {
  const setDone = useContext(DoneContext);
  const color = !day.isSelectedYear
    ? "#333333"
    : day.isInPast
    ? "#995500"
    : day.isToday
    ? "#33ff33"
    : "#ff9900";
  return (
    <div
      style={{
        width: "1.3vw",
        aspectRatio: 1,
        background: color,
        borderRadius: "20%",
        borderColor: day.done ? "#ffffff" : "#000000",
        borderStyle: "solid",
      }}
      onClick={() => setDone(day.isoString, !day.done)}
    ></div>
  );
}
