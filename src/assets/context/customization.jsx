/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CustContext = createContext({});

export function CustProvider(props) {
  const [material, setMaterial] = useState("leather");
  return (
    <CustContext.Provider value={{ material, setMaterial }}>
      {props.children}
    </CustContext.Provider>
  );
}

export const useCustomization = () => {
  const context = useContext(CustContext);
  return context;
};
