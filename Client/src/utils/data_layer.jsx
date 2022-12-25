import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
export default DataLayer;
