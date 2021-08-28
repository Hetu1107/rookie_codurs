import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./firstPage.css";
function First() {
  const [value, setValue] = useState("");
  const submit = () => {
    localStorage.setItem("id", value);
    window.location.assign("/searchAlumni");
  };
  return (
    <div class="first_body">
      <div className="welcome_first">
        <div className="welcome_first_nav">
          <div>
            <i class="fas fa-search" onClick={()=> window.location.assign("#search_alumni")}></i>
          </div>
          <div>
            <i class="far fa-registered" onClick={()=> window.location.assign("#register_alumni")}></i>
          </div>
          <div>
            <i
              class="fas fa-comments"
              onClick={() => window.location.assign("/rooms")}
            ></i>
          </div>
          <div>
            <i
              class="fas fa-calendar-day"
              onClick={() => window.location.assign("/event")}
            ></i>
          </div>
        </div>
        <h2>Welcome To THE IIIT SUART ALUMNI WEBSITE</h2>
      </div>
      <div className="second_first">
        <div className="search_alumni" id="search_alumni">
          <div className="search_alumni_head">
            <h2>Search Alumni</h2>
          </div>
          <div className="input_search_alumni">
            <div>
              <label>Batch</label>
              <input
                type="number"
                onChange={(event) => setValue(event.target.value)}
                value={value}
                className="search_alm_inp"
              ></input>
            </div>
            <div className="alumni_search">
              <button onClick={submit}>search</button>
            </div>
          </div>
        </div>
        <div className="alumni_section" id="register_alumni">
          <div>
            <h2>Register / Login Here</h2>
          </div>
          <div className="alumni_search cc">
            <button onClick={() => window.location.assign("/login")}>
              Login
            </button>
            <button onClick={() => window.location.assign("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
