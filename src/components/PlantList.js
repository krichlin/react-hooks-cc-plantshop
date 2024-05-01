import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, soldOut }) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard plant={plant} key={plant.id} soldOut={soldOut} />)}
    </ul>
  );
}

export default PlantList;