import React, { useContext } from "react";
import "./style.css";
import { GlobalState } from "../../context/GlobalContex";

const Home = () => {
  const { name } = useContext(GlobalState);
  return (
    <>
      <h1>
        {
          name.map((item)=>{
            return <SingleCard img={item.img} title={item.img}/>
          })
        }
      </h1>
    </>
  );
};

export default Home;
