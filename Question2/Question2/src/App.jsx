import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../../routing-app/src/pages/Home";
import About from "../../routing-app/src/pages/About";
import Contact from "../../routing-app/src/pages/Contact";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>My React App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;