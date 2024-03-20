import { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
