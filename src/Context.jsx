import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [arrayvalues, setArrayValues] = useState([]);
  console.log("🚀 ~ file: Context.jsx:8 ~ AppProvider ~ arrayvalues", arrayvalues)
  return (
    <AppContext.Provider
      value={{ arrayvalues, setArrayValues }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
