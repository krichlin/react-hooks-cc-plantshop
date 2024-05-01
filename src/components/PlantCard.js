import React from "react";

function PlantCard({ plant, soldOut }) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.sold ?  (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => soldOut(plant)}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
