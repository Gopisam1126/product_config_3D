/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CustContext = createContext({});

export const chairColors = [
  { color: "#001A6E", name: "Navy" },
  { color: "#009990", name: "Teal" },
  { color: "#FF204E", name: "Red" },
  { color: "#740938", name: "Maroon" },
  { color: "#7E1891", name: "Purple" },
];

export const cushionColors = [
  { color: "#F26B0F", name: "Orange" },
  { color: "#355F2E", name: "Green" },
  { color: "#543A14", name: "Brown" },
  { color: "#9AA6B2", name: "Grey" },
  { color: "#8A2BE2", name: "Violet" },
];

export function CustProvider(props) {
  const [material, setMaterial] = useState("fabric");
  const [legs, setLegs] = useState("design");
  const [chairColor, setChairColor] = useState(chairColors[3]);
  const [cushionColor, setCushionColor] = useState(cushionColors[2]);
  return (
    <CustContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustContext.Provider>
  );
}

export const useCustomization = () => {
  const context = useContext(CustContext);
  return context;
};
