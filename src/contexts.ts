import { createContext } from "react";

export const DoneContext = createContext(
  (isoString: string, state: boolean): void => {
    void isoString;
    void state;
  }
);
