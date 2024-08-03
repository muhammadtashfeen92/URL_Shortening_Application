import "./urlcomponents/Navbar.css";
import "./urlcomponents/Home.css";
import "./urlcomponents/History.css";
import Navbar from "./urlcomponents/Navbar";
import Home from "./urlcomponents/Home";
import History from "./urlcomponents/History";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
