import React, { useEffect, useState } from "react";
import "./style.css";
const Home = () => {
  const [info, setInfo] = useState(5);
  const [name, setName] = useState(10);

  useEffect(() => {
    // her renderde ise dusur
  });

  useEffect(() => {
    // yalniz ilk renderda
  }, []);

  useEffect(() => {
    console.log("state changed");
    //parametrden asili olaraq
  }, [info]);

  return (
    <>
      <h1>{info}</h1>
      <p>{name}</p>
      <button onClick={() => setInfo(info + 1)}>chnage number</button>
      <button onClick={() => setName(name - 1)}>chnage name</button>
    </>
  );
};

export default Home;

// useState
// useEffect
// useContext
// useLayoutEffect
// useReducer
// useCallback
