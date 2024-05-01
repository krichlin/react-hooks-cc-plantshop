import React, { useState } from "react";

// Use the form in the header to add a new plant.

function NewPlantForm({ addNewPlant }) {   

  const [formName, setFormName] = useState("")       // declare 3 state variables for Name, Image, Price
  const [formImage, setFormImage] = useState("")
  const [formPrice, setFormPrice] = useState("")

  function handleSubmit(event) {      
    event.preventDefault()            // do not reload page on submit
    const newPlant = {
      "name": formName,
      "image": formImage,
      "price": formPrice
    }
    // console.log("newPlant",newplant);
    addNewPlant(newPlant)       // when form submits, send the newPlant object we just made to addNewPlant
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formName} placeholder="Plant name" onChange={(e) => setFormName(e.target.value)} />
        <input type="text" name="image" value={formImage} placeholder="Image URL" onChange={(e) => setFormImage(e.target.value)} />
        <input type="number" name="price" value={formPrice} step="0.01" placeholder="Price" onChange={(e) => setFormPrice(parseFloat(e.target.value))} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;