import { createContext } from "react";
import BaseContext from "./BaseContext";

const Context = createContext({});

export function RequestedBooksContextProvider({ children }) {
  const context = BaseContext(Context, children);
  return context;
}

export default Context;
