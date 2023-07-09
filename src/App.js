import "./App.css";
import { Routes, Route } from "react-router-dom";
import Continents from "./pages/Continents/Continents";
import Countries from "./pages/Countries/Countries";
import Destination from "./pages/Destinations/Destination";
import DestinationDetails from "./pages/DestinationDetails/DestinationDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:continentID" element={<Countries />} />
        <Route
          path="/destinations/:continentID/:countryID"
          element={<Destination />}
        />
        <Route
          path="/destination-details/:continentID/:countryID/:destinationID"
          element={<DestinationDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
