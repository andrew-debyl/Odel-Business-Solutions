import React, { createContext, useState, useContext } from 'react';

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("marketing-teams");

  return (
    <ValueContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => {
  return useContext(ValueContext);
};