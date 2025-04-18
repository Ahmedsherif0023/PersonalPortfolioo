import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function


  const handleScheduleCall = () => {
    window.open("https://cal.com/ahmed-sherif-tg2x15", "_blank");
  };

  const handleAboutMe = () => {
    navigate("/About"); // Navigate to the About page
  };
  
  return (
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
        <button className="aboutme" onClick={handleAboutMe}>About Me</button>
        <button className="call" onClick={handleScheduleCall}>Schedule a Call</button>
      </div>
      <div className="right-section">
        <img src="/assets/LandingPage.png" alt="LandingPage" />
      </div>
    </div>
  );
};

export default Home;
