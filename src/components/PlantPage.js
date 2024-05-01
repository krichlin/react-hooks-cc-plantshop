import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant, soldOut, notSoldOut}) {
  const [plantSearch, setPlantSearch] = useState("")  // use empty string to intialize as string type

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setPlantSearch={setPlantSearch} />
      <PlantList plants={plants.filter(p => p.name.toLowerCase().startsWith(plantSearch.toLowerCase()))} soldOut={soldOut} notSoldOut={notSoldOut}/>
    </main>
  );

}

export default PlantPage;