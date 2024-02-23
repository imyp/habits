import { DayType, Day } from "./Day";
import { range } from "../utils";

export function Week({ days }: { days: DayType[] }) {
  return (
    <div style={{ display: "flex", gap: "0.3vw", flexDirection: "column" }}>
      {range(7).map((d) => (
        <Day key={d} day={days[d]} />
      ))}
    </div>
  );
}
