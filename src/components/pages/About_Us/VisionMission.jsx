import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <div className="App-VisionMission">
      <header className="App-header-VisionMission">
        <h1>Our Vision & Mission</h1>
      </header>
      <main className="App-main-VisionMission">
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To ensure that every child attains the knowledge, skill and
            understanding to be an asset to society while honouring diversity &
            individual learning styles.
          </p>
          <br />
          <img src="/About_Us_Images/Vision_Mission_Images/OURVISION.jpg" alt="Vision" />
        </section>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            To provide a safe learning environment and an academic foundation
            which is developmentally appropriate, innovative and challenging and
            encompasses all aspects of growth.
          </p>
          <br />
          <img src="/About_Us_Images/Vision_Mission_Images/NFH03217.JPG" alt="Mission" />
        </section>
      </main>
    </div>
  );
};

export default VisionMission;
