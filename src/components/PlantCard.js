import React from "react";

function PlantCard({ plant, soldOut, notSoldOut }) {  // send soldOut boolean flag by props

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.sold ?  (
        <button onClick={() => notSoldOut(plant)}>Out of Stock</button>  
        
                                       // I guess we just add a new handler here that
                                       // reads... notSoldOut?  Sure why not
                                  
      ) : (
        <button className="primary" onClick={() => soldOut(plant)}>In Stock</button>
      )}
    </li>
  );

}

export default PlantCard;
