export function Year({
  year,
  setYear,
}: {
  year: number;
  setYear: (year: number) => void;
}) {
  return (
    <div>
      <h1>{year}</h1>
      <button onClick={() => setYear(year - 1)}>-</button>
      <button onClick={() => setYear(year + 1)}>+</button>
    </div>
  );
}
