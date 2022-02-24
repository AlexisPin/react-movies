import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FavList from "./pages/FavList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
