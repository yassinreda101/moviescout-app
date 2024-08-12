import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import MovieDetails from "./MovieDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>MovieScout</h1>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;