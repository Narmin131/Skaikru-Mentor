import React from "react";

const SingleCard = ({ title, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default SingleCard;
