import React from "react";

const ResturantCard = (props) => {
  const { resturent } = props;
  const card = resturent.card.info;

  console.log(card);
  return (
    <div>
      <span>{card.name}</span>
      <span>{card.areaName}</span>
    </div>
  );
};

export default ResturantCard;
