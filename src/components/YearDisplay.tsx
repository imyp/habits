import { range } from "../utils";
import { DayType } from "./Day";
import { Week } from "./Week";

export function YearDisplay({ days }: { days: DayType[] }) {
  return (
    <div style={{ display: "flex", gap: "0.3vw" }}>
      {range(53).map((w) => (
        <Week key={w} days={days.slice(w * 7, (w + 1) * 7)} />
      ))}
    </div>
  );
}
