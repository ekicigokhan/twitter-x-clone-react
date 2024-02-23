import { useContext } from "react";
import { createContext } from "react";

export const TabContext = createContext();
export const useTab = () => useContext(TabContext);
