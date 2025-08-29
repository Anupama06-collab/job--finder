import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./components/Jobs";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Job Finder</h1>
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
