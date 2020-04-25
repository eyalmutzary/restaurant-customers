import React, { useState } from "react";

export const AuthTableNumContext = React.createContext();

const Store = ({ children }) => {
  const [authTableNum, setAuthTableNum] = useState();

  return (
    <AuthTableNumContext.Provider value={[authTableNum, setAuthTableNum]}>
      {children}
    </AuthTableNumContext.Provider>
  );
};

export default Store;
