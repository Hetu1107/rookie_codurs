import React, { useState } from "react";
import db from "../FireBase";
import "./ConfirmedRegistration.css";

function ConfirmedRegistration() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const submit = () => {
    if (password === confirmPassword) {
      db.collection("login")
        .add({
          admission: localStorage.getItem("admission"),
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        })
        .then(() => {
          window.location.assign("/profilealumni");
        });
    } else {
      window.alert("Your password is incorrect");
    }
  };
  return (
    <div>
      <div class="Background">
        <div className="Confirm">
          <div className="Title">
            <h2>Hi {localStorage.getItem("name")}</h2>
            <h3>Please chose a Password</h3>
          </div>
          <div className="id_password">
            <div>
              <label>Email id</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              ></input>
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              ></input>
            </div>

            <div className="submit_button">
              <button onClick={submit}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedRegistration;
