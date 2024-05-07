import React from "react";
import { useWishlist } from "react-use-wishlist";

const WishBtn = ({ product }) => {
  console.log(product);
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleWishlist = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
    } else {
      addWishlistItem(myProduct);
    }
  };
  return (
    <>
      <button onClick={() => toggleWishlist(product)}>
        {inWishlist(product.id) ? "ici dolu urek" : "ici bos urek"}
      </button>
    </>
  );
};

export default WishBtn;
