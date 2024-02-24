import "./year.css";

/* Icons */
function ChevronLeft() {
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
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRight() {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function Year({
  year,
  setYear,
}: {
  year: number;
  setYear: (year: number) => void;
}) {
  return (
    <div className="yearcontainer">
      <button className="yearbutton" onClick={() => setYear(year - 1)}>
        <ChevronLeft />
      </button>
      <div className="yeardisplay">{year}</div>
      <button className="yearbutton" onClick={() => setYear(year + 1)}>
        <ChevronRight />
      </button>
    </div>
  );
}
