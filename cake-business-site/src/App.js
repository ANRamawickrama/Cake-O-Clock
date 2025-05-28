import React from 'react';
import "./App.css";

import Header from "./components/Header.js";
import Gallery from "./components/Gallery.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
