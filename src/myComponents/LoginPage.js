import React, { useEffect, useState } from "react";
import db from "../FireBase";
import "./LoginPage.css";

function LoginPage() {
  const [admission, setAdmission] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(0);
  const submit = () => {
    if (admission && password) {
      db.collection("login").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().admission === admission) {
            if (doc.data().password === password) {
              window.location.assign("/profilealumni");
              localStorage.setItem("admission", admission);
            } else {
              window.alert("wrong password");
            }
          }
        });
      });
    }
    // if(admission && )
    // window.location.assign("/profilealumni");
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
              type="text" placeholder="Ex : UI20CS48"></input>
          </div>
          <div>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
          </div>
          <div className="login_button">
            <button onClick={submit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
