import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, soldOut, notSoldOut }) {  // added soldOut flag, so now we can toggle it on and off
                                                       // i can't believe that worked.
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard plant={plant} key={plant.id} soldOut={soldOut} notSoldOut={notSoldOut} />)}
    </ul>
  );
}

export default PlantList;