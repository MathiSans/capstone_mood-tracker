import { createContext, useContext, useState } from "react";
export const SphereStateContext = createContext();

export function SphereStateProvider({ children }) {
  const [sphereState, setSphereState] = useState({
    color: "grey",
    intensity: 0.1,
  });

  function handleSphereState({ color, intensity }) {
    setSphereState({ color, intensity });
  }

  return (
    <SphereStateContext.Provider value={{ sphereState, handleSphereState }}>
      {children}
    </SphereStateContext.Provider>
  );
}

export function useSphereState() {
  return useContext(SphereStateContext);
}
