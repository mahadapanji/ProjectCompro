import React from "react";
import About from "../components/About";
import "./AboutPageCss.css"

export default function LandingPage() {
  return (
    <div className="app">

    <div className="row" style={{backgroundColor: "black"}}>
      <h1 style={{color: "white"}}>About</h1>
      <p style={{ 
        paddingLeft: 250,
        paddingRight: 250,
        color: "white",
        fontSize:25
        }}>
      WE ARE THE DIEHL GROUP ARCHITECTS, A FULL-SERVICE DESIGN AND CONSULTING 
      FIRM SPECIALIZING IN FORENSIC ARCHITECTURE, QUALITY ASSURANCE, AND EXPERT WITNESS TESTIMONY. </p>
      <p style={{
        paddingLeft: 250,
        paddingRight: 250,
        color:"white", 
        fontSize:25
        }}>WE ENSURE SOUND DESIGN AND LEGAL COMPLIANCE THROUGHOUT A BUILDING'S LIFESPAN, 
      FROM CRADLE TO GRAVE.</p>
      <p style={{
        paddingLeft: 250,
        paddingRight: 250,
        fontSize:25,
        color: "red"
        }}>WE KNOW BUILDINGS</p>
    </div>


    <About />
    </div>
  );
}