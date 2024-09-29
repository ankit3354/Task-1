import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";

function Home() {
  return (
    <>
      <div className="Home-container">
        <div className="Bg-image">
          <div className="Bg-color"></div>
          <Navbar />
          <Header />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
