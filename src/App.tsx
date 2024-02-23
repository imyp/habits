import { useEffect, useState, useMemo } from "react";
import { getYearDays } from "./dates";
import { DoneContext } from "./contexts";
import { YearDisplay } from "./components/YearDisplay";
import { JsonLoader } from "./components/JsonLoader";
import { JsonSaver } from "./components/JsonSaver";
import { Activity } from "./components/Activity";
import { Year } from "./components/Year";

interface ActivityDataType {
  [activity: string]: string[] | undefined;
}

const initialActivity = "walking";
const initialActivityData = { [initialActivity]: [] };

function App() {
  const [year, setYear] = useState(2024);
  const [activity, setActivity] = useState(initialActivity);
  const [activityData, setActivityData] =
    useState<ActivityDataType>(initialActivityData);
  const currentData = activityData[activity];
  useEffect(() => {
    if (currentData === undefined)
      setActivityData({ ...activityData, [activity]: [] });
  }, [activity]);
  const days = useMemo(() => getYearDays(year), [year]);
  const daysData = days.map((day) => {
    return {
      ...day,
      done:
        currentData === undefined ? false : currentData.includes(day.isoString),
    };
  });
  const setDone = (isoString: string, state: boolean) => {
    if (currentData === undefined)
      throw new Error("Cannot set done state when data does not exist");
    const newData = state
      ? currentData.includes(isoString)
        ? currentData
        : currentData.concat([isoString])
      : currentData.filter((s) => s !== isoString);
    setActivityData({ ...activityData, [activity]: newData });
  };
  return (
    <div>
      <Year year={year} setYear={setYear} />
      <Activity
        current={activity}
        activities={Object.keys(activityData)}
        setActivity={setActivity}
      />
      <DoneContext.Provider value={setDone}>
        <YearDisplay days={daysData} />
      </DoneContext.Provider>
      <JsonLoader hook={setActivityData as (data: object) => void} />
      <JsonSaver data={activityData} />
    </div>
  );
}

export default App;
