import React from "react";
import "./Home.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import D1 from "../assets/D1.jpg";
import RTR1 from "../assets/RTR1.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="home_container">
        <div className="home_hero">
          <h1 className="home_title">DUKE</h1>
          <img src={D1} alt="D1"></img>
          <h1 className="home_sec-title">250</h1>
        </div>
        {/* Bottom Bar */}
        <div className="home_bottom">
          <img src={RTR1} alt="RTR1"></img>
          <div className="home_spec-container">
            <div className="home_spec">
              <p className="home_spec-info">
                248.8cc <p className="home_spec-title">Engine</p>
              </p>
            </div>
            <div className="home_spec-line"></div>
            <div className="home_spec">
              <p className="home_spec-info">
                24 NM <p className="home_spec-title">Torque</p>
              </p>
            </div>
            <div className="home_spec-line"></div>
            <div className="home_spec">
              <p className="home_spec-info">
                30 hp<p className="home_spec-title">Power</p>
              </p>
            </div>
            <div className="home_spec-line"></div>
            <div className="home_spec">
              <p className="home_spec-info">
                6 speed <p className="home_spec-title">Transmission</p>
              </p>
            </div>
          </div>
          <div className="home_color-radio">
            <RadioGroup defaultValue="female">
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
