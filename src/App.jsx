import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scroller from "./components/Scroller";
import MenuCards from "./components/MenuCards";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <Scroller />
    <MenuCards />
    {/* <div className="h-16 sm:h-20 lg:h-28"></div> */}
    <Reviews />
    <Footer />
    </>
  );
}

export default App;
