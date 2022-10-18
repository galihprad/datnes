import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [pegawaiData, setPegawaiData] = useState(null);
  const [styleTable, setStyleTable] = useState(true);

  const state = {
    showSidebar,
    setShowSidebar,
    styleTable,
    setStyleTable,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppWrapper, useAppContext };
