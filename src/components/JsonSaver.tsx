function saveDateToJson(dataObject: object, fileName: string) {
  const data = JSON.stringify(dataObject, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
}

export function JsonSaver({ data }: { data: object }) {
  return (
    <button onClick={() => saveDateToJson(data, "data.json")}>Save</button>
  );
}
