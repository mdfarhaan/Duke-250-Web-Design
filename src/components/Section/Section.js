import React from "react";
import "./Section.css";
import D2 from "../assets/D2.jpg";
function Section() {
  return (
    <div className="section1_container">
      <div className="sec1_content">
        <h1>
          <h2>The Thrill Chaser</h2>
          KTM DUKE 250{" "}
          <p className="sec1_para">
            If chasing thrills is your game then climb aboard the KTM 250 DUKE.
            It combines maximum riding exhilaration with optimum user value and
            is hard to beat wherever nimble handling counts. Lightweight,
            powerful and packed with advanced technology, it promises to deliver
            a thrilling ride from sunrise to sunset.
          </p>
        </h1>
      </div>
      <img src={D2} alt="D2" />
    </div>
  );
}

export default Section;
