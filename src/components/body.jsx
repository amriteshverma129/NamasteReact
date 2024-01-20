import React from "react";
import data from "../../public/service.json";
import ResturantCard from "./ResturantCard";

const Body = () => {
  return (
    <div>
      {data.map((res) => {
        return (
          <ResturantCard resturent={res.card} key={res.card.card.info.id} />
        );
      })}
    </div>
  );
};

export default Body;
