import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Course from "./component/course/Course";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Play from "./component/play/Play";
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Course />
                <Course />
              </div>
            }
          />
          <Route path="/:id" element={<Play />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
