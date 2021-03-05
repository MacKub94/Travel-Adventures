import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsOpenSidebar] = useState(false);

  const toogleSidebar = () => {
    setIsOpenSidebar(!isSidebarOpen);
  };
  return (
    <AppContext.Provider value={{ isSidebarOpen, toogleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
