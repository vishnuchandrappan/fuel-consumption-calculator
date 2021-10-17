import { useState } from "react";
import "./App.css";

const dummyData = {
  Petrol: {
    Mahindra: [
      {
        model: "KUV 100 NXT(Hatchback)",
        rate: 0.15,
      },
      {
        model: "Alturas(SUV)",
        rate: 0.258,
      },
    ],
    Maruti: [
      {
        model: "Swift",
        rate: 0.15,
      },
      {
        model: "Brezza",
        rate: 0.258,
      },
    ],
  },
  Diesel: {
    Mahindra: [
      {
        model: "KUV 100 NXT(Hatchback)",
        rate: 0.15,
      },
    ],
  },
};

function App() {
  const [distance, setDistance] = useState(0);
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectedType = (e) => {
    setSelectedFuelType(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectedBrand = (e) => {
    setSelectedBrand(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectedModel = (e) => {
    setSelectedModel(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App container">
      <h1>Vehicle emission rate calculator</h1>

      <div className="container form">
        <div className="form-group">
          <label htmlFor="distance">Distance travelled (in KMs)</label>
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
            <option value={null}>-- select --</option>
            {Object.keys(dummyData).map((fuelType) => (
              <option value={fuelType} key={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>

        {selectedFuelType && (
          <div className="form-group">
            <label htmlFor="selectedBrand">Brand name</label>
            <select
              id="selectedBrand"
              onChange={handleSelectedBrand}
              value={selectedBrand}
            >
              <option value={null}>-- select --</option>
              {Object.keys(dummyData[selectedFuelType]).map((brand) => (
                <option value={brand} key={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedBrand && (
          <div className="form-group">
            <label htmlFor="selectedBrand">Model name</label>
            <select
              id="selectedBrand"
              onChange={handleSelectedModel}
              value={selectedModel}
            >
              <option value={null}>-- select --</option>
              {dummyData[selectedFuelType][selectedBrand].map((item) => (
                <option value={item.rate}>{item.model}</option>
              ))}
            </select>
          </div>
        )}

        <br />

        {selectedModel && (
          <div className="form-group">
            <label htmlFor="fuelConsumption" className="h1">
              Carbon dioxide emission : {selectedModel * distance} kg
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
