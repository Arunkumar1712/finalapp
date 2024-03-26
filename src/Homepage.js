import React from "react";
import GIRL from "./GIRL.png";
import '../src/App.css';
export function Homepage() {
  return (
    <div className="caption">
      <div className="texthome">
        Never Ask, What Should I Wear? -<span style={{color:"#D04848"}}>Again ,</span>  "<span style={{color:"#FDE767"}}>Unlock</span> Your  <span style={{color:"#F3B95F"}}> Confidence  </span> with the 
        <span style={{color:"#6895D2"}}> Perfect Outfit</span> ", "Effortless Style, Every Day"{" "}
      </div>
      <div className="imagehome">
        <img src={GIRL} style={{ height: "300px" }}></img>
      </div>
    </div>
  );
}
