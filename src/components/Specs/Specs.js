import React from "react";
import "./Specs.css";
import D3 from "../assets/D3.jpg";

function Specs() {
  return (
    <div className="specs_conatiner">
      <div className="specs_content">
        {/* Left Section */}
        <div className="specs_left">
          <div className="specs">
            <p className="specs_title">
              Power <p className="specs_info">30 hp</p>
            </p>
          </div>
          <div className="specs">
            <p className="specs_title">
              ABS <p className="specs_info">Dual Channel ABS</p>
            </p>
          </div>
          <div className="specs">
            <p className="specs_title">
              Cooling<p className="specs_info">Liquid Cooling</p>
            </p>
          </div>
          <div className="specs">
            <p className="specs_title">
              Fuel Consumption <p className="specs_info">30 km/l</p>
            </p>
          </div>
        </div>
        {/* Image Section */}
        <img src={D3} alt="D3" />
        {/* Right Section */}
        <div className="specs_right">
          <div className="specs">
            <p className="specs_title">
              Engine <p className="specs_info">248.8cc</p>
            </p>
          </div>
          <div className="specs">
            <p className="specs_title">
              Torque <p className="specs_info">24 NM</p>
            </p>
          </div>
          <div className="specs">
            <p className="specs_title">
              Power<p className="specs_info">30 hp </p>
            </p>
          </div>
          <div className="specs">
            <p className="specs_title">
              Transmission <p className="specs_info">6 Speed</p>
            </p>
          </div>
        </div>
      </div>
      <center>
        <h1 className="specs_tag">#GETDUKED</h1>
      </center>
    </div>
  );
}

export default Specs;
