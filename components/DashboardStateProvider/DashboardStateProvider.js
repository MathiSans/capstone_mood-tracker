import { createContext, useContext, useState } from "react";
export const DashboardContext = createContext();

export function DashboardStateProvider({ children }) {
  const [dashboardIsOpen, setDashboardIsOpen] = useState(false);

  function handleDashboardIsOpen() {
    setDashboardIsOpen(!dashboardIsOpen);
  }

  return (
    <DashboardContext.Provider
      value={{ dashboardIsOpen, handleDashboardIsOpen }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardState() {
  return useContext(DashboardContext);
}
