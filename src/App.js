import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import MovieDetails from "./MovieDetails";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>MovieScout</h1>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;