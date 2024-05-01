import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"
function App() {
  const [plants, setPlants] = useState([])


  useEffect(() => fetch(API)
    .then(res => res.json())
    .then(setPlants), [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant} soldOut={soldOut} />
    </div>
  )

  function addNewPlant(newPlant) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
    .then(res => res.json())
    .then(json => setPlants([...plants, json]))
  }

  function soldOut(plant) {
    const newPlantList = plants.map(p => p.id !== plant.id ? p : { ...p, sold: true })
    setPlants(newPlantList)
  }
}

export default App;