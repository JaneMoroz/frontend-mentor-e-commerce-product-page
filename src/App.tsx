import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Product from "./components/product/Product";
import Lightbox from "./components/Lightbox";

function App() {
  return (
    <main>
      <Navbar />
      <Product />
      <Lightbox />
    </main>
  );
}

export default App;
