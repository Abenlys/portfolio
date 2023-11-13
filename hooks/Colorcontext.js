import { createContext, useContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {


  const [isJedi, setIsJedi] = useState(true);

  return (
    <ColorContext.Provider value={{ isJedi, setIsJedi }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
