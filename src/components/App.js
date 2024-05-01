import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"    // save this string since we are using it a lot

function App() {
  const [plants, setPlants] = useState([])    // stateful variable to represent plants


  useEffect(() => fetch(API)
    .then(resp => resp.json())
    .then(setPlants), [])         // run this effect once to populate the plants

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant} soldOut={soldOut} notSoldOut={notSoldOut} />
    </div>
  )

  function addNewPlant(newPlant) {     // add a new plant here
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
    .then(resp => resp.json())
    .then(json => setPlants([...plants, json]))  // new plant added with spread operator
  }

  // console.log("plant",plant);

  function soldOut(plant) {        // we want to change this so that it toggles the 
                                   // sold flag.  Here we just set it.  But how?

    // map through plants array for the one that's triggering this
    // then set sold = true 

    const newPlantList = plants.map(p => p.id !== plant.id ? p : { ...p, sold: true })  // change this

    // save it into a new array

    setPlants(newPlantList)  // send that array to the state variable
  }

  function notSoldOut(plant) {

    const newPlantList = plants.map(p => p.id !== plant.id ? p : {...p, sold: false}) // changed that

    setPlants(newPlantList) // send that array to the state variable and hope for the best

  }

}

export default App;