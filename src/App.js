import { useState } from "react";
import "./App.css";

const fuelType = ["Diesel", "Petrol"];

function App() {
  const [distance, setDistance] = useState(0);
  const [selectedFuelType, setSelectedFuelType] = useState("Diesel");
  const [fuelConsumption, setFuelConsumption] = useState(0);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleSelectedType = (e) => {
    setSelectedFuelType(e.target.value);
  };

  const handleFuelConsumptionChange = (e) => {
    setFuelConsumption(e.target.value);
  };

  return (
    <div className="App container">
      <h1>Hello world</h1>

      <div className="container form">
        <div className="form-group">
          <label htmlFor="distance">Distance travelled</label>
          <input
            type="number"
            id="distance"
            className="form-group"
            value={distance}
            onChange={handleDistanceChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectedFuelType">Fuel type</label>
          <select
            id="selectedFuelType"
            onChange={handleSelectedType}
            value={selectedFuelType}
          >
            {fuelType.map((fuelType) => (
              <option value={fuelType} key={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fuelConsumption" className="h1">
            Fuel consumption
          </label>
          <input
            type="number"
            id="fuelConsumption"
            value={fuelConsumption}
            onChange={handleFuelConsumptionChange}
          />
        </div>

        <div className="form-group">
          <button className="button-outline">Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
