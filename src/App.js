import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
