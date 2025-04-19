import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../app/globals.css"; // Import the global CSS file
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const Home = () => {

  
  return (
<div className="WorkContainer">
  <Header />
      <div className="container">
        <div className="left-section">
          <h1>
            Hi, I'm <br /> Ahmed Sherif
          </h1>
          <p>
            A React/Next.js developer crafting modern,
            <br />
            responsive web apps from pixel-perfect UI/UX designs.
          </p>
          <h2>
            Got an idea?
            <br />
            Let's bring it to life
          </h2>
          </div>
        <div className="right-section">
          <img src="/assets/LandingPage.png" alt="LandingPage" />
        </div>
      </div>
      <Footer />
</div>
  );
};

export default Home;
