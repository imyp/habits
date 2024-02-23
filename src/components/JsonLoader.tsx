import { FormEvent } from "react";

function jsonFromForm(
  e: FormEvent<HTMLFormElement>,
  hook: (jsonData: object) => void
) {
  e.preventDefault();
  if (e.currentTarget.length === 0)
    throw new Error("Did not have any elements");

  const firstElement = e.currentTarget[0];
  if (!(firstElement instanceof HTMLInputElement))
    throw new Error("Element was not of input type");

  const files = firstElement.files;
  if (!(files instanceof FileList)) throw new Error("Was not a filelist");
  if (files.length !== 1) throw new Error("Only single file supported");

  const dataFile = files[0];
  if (!(dataFile instanceof File)) throw new Error("Only file input supported");

  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    const reader = e.target;
    if (reader === null) throw new Error("No reader.");
    const result = reader.result;
    if (typeof result !== "string") throw new Error("Non string result.");
    const parsedData = JSON.parse(result);
    hook(parsedData);
  });
  reader.readAsText(dataFile);
  e.currentTarget.reset();
}

export function JsonLoader({ hook }: { hook: (data: object) => void }) {
  return (
    <form onSubmit={(e) => jsonFromForm(e, hook)}>
      <input type="file" accept=".json" />
      <button>Done</button>
    </form>
  );
}
