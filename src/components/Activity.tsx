export function Activity({
  current,
  activities,
  setActivity,
}: {
  current: string;
  activities: string[];
  setActivity: (activity: string) => void;
}) {
  return (
    <div>
      <label htmlFor="selector">Activity selector</label>
      <select
        id="selector"
        onChange={(e) => setActivity(e.target.value)}
        value={current}
      >
        {activities.map((activity) => (
          <option key={activity} value={activity}>
            {activity}
          </option>
        ))}
      </select>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.currentTarget.length === 0) throw new Error("No elements");
          const el = e.currentTarget[0];
          if (!(el instanceof HTMLInputElement)) throw new Error("Not input");
          setActivity(el.value);
          e.currentTarget.reset();
        }}
      >
        <label htmlFor="new">Add new activity</label>
        <input id="new" type="text" />
        <button>add</button>
      </form>
    </div>
  );
}
