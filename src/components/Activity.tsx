import { useState } from "react";
import "./activity.css";

function XMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      width={20}
      height={20}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

function Plus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      width={20}
      height={20}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export function Activity({
  current,
  activities,
  setActivity,
}: {
  current: string;
  activities: string[];
  setActivity: (activity: string) => void;
}) {
  const [adding, setAdding] = useState(false);
  const [inputText, setInputText] = useState("");
  return (
    <div className="activitycontainer">
      {adding ? (
        <>
          <form
            className="activitycontainer"
            onSubmit={(e) => {
              e.preventDefault();
              if (inputText !== "") {
                setActivity(inputText);
              }
              setAdding(false);
              setInputText("");
            }}
          >
            <input
              className="activityinput"
              type="text"
              value={inputText}
              maxLength={20}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="activitybutton">
              <Plus /> Add
            </button>
            <button
              className="activitybutton"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setAdding(false);
                setInputText("");
              }}
            >
              <XMark /> Cancel
            </button>
          </form>
        </>
      ) : (
        <>
          <select
            className="activityselector"
            value={current}
            onChange={(e) => setActivity(e.target.value)}
          >
            {activities.map((a) => (
              <option className="activityoption" key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <button className="yearbutton" onClick={() => setAdding(true)}>
            <Plus />
          </button>
        </>
      )}
    </div>
  );
}
