import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WishBtn from "./components/WishBtn";
import About from "./pages/About/About";
import { useSelector, useDispatch } from "react-redux";
import { incrementFunc, decrementFunc, reset } from "./redux/action/actions";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);

  const myCounter = useSelector((store) => store.CounterReducer);
  console.log(myCounter);

  const dispatch = useDispatch();

  return (
    <>
      <span>{myCounter}</span>
      <button onClick={() => dispatch(incrementFunc())}>+</button>
      <button onClick={() => dispatch(decrementFunc())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>

      {data.map((item) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <WishBtn product={item} />
            </div>
          </div>
        );
      })}

      <h2>Wishlist sehifesi</h2>
      <About />
    </>
  );
};

export default App;
