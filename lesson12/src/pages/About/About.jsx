import React from "react";
import { useWishlist } from "react-use-wishlist";
import WishBtn from "../../components/WishBtn";

const About = () => {
  const { items } = useWishlist();
  return (
    <>
      {items.map((item) => {
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
    </>
  );
};

export default About;
