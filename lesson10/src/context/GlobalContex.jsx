import { createContext, useEffect, useState } from "react";

export const GlobalState = createContext();
import products from './data/data.js'

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState(products);
//   useEffect(() => {
//     fetch("")
//       .then((res) => res.json())
//       .then((myData) => {
//         console.log(myData)
//         setName(myData.data)
//       });
//   });
  return (
    <GlobalState.Provider value={{ name, setName }}>
      {children}
    </GlobalState.Provider>
  );
};
