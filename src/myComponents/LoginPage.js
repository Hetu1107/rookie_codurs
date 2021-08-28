import React, { useEffect, useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [admission, setAdmission] = useState("");
  const submit = () => {
    window.location.assign("/profilealumni");
    localStorage.setItem("admission", admission);
  };

  return (
    <div class="background">
      <div className="login">
        <div className="title">
          <h2>Login to your page</h2>
        </div>
        <div className="login_details">
          <div>
            <label>Admission Number</label>
            <input
              value={admission}
              onChange={(e) => setAdmission(e.target.value)}
              type="text"
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className="login_button">
            <button onClick={submit}>search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
