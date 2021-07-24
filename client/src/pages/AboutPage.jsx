import React from "react";
import About from "../components/About";
import "./AboutPageCss.css"

export default function LandingPage() {
  return (
    <div className="app">
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet"/>
    <div className="row" style={{
      backgroundColor: "#1e1f1e",
      fontFamily:"'Rajdhani', sans-serif",
      paddingTop:10,
      paddingBottom:10}}>
      <h1 style={{
       color: "#707070",
       fontSize:20,
       letterSpacing:1,
       textDecorationLine:"overline",
       fontWeight:100
       }}>ABOUT</h1>
      <p style={{ 
        paddingLeft: 250,
        paddingRight: 250,
        color: "white",
        fontSize:25,
        letterSpacing:3,
        fontFamily:"'Rajdhani', sans-serif",
        }}>
      WE ARE THE DIEHL GROUP ARCHITECTS, A FULL-SERVICE DESIGN AND CONSULTING 
      FIRM SPECIALIZING IN FORENSIC ARCHITECTURE, QUALITY ASSURANCE, AND EXPERT WITNESS TESTIMONY. </p>
      <p style={{
        paddingLeft: 250,
        paddingRight: 250,
        color:"white", 
        fontSize:25,
        letterSpacing:3,
        fontFamily:"'Rajdhani', sans-serif"
        }}>WE ENSURE SOUND DESIGN AND LEGAL COMPLIANCE THROUGHOUT A BUILDING'S LIFESPAN, 
      FROM CRADLE TO GRAVE.</p>
      <p style={{
        paddingLeft: 250,
        paddingRight: 250,
        fontSize:25,
        letterSpacing:3,
        color: "#ad0000",
        fontFamily:"'Rajdhani', sans-serif"
        
        }}>WE KNOW BUILDINGS</p>
    </div>


    <About />
    </div>
  );
}