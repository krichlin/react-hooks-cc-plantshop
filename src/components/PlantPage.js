import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant, soldOut, }) {
  const [plantSearch, setPlantSearch] = useState("")


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setPlantSearch={setPlantSearch} />
      <PlantList plants={plants.filter(p => p.name.toLowerCase().startsWith(plantSearch.toLowerCase()))} soldOut={soldOut} />
    </main>
  );
}

export default PlantPage;