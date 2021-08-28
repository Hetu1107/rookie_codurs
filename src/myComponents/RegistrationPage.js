import React, { useEffect, useState } from "react";
import db from "../FireBase";
import "./RegistrationPage.css";

function RegistrationPage() {
  const [admission, setAdmission] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const submit = () => {
    db.collection("institute").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().admission === admission) {
          localStorage.setItem("name",name)
          console.log(doc.data().admission);
          console.log(admission);
          db.collection("alumni")
            .add({
              admission: admission,
              batch: batch,
              name: name,
            })
            .then(() => {
              window.location.assign("/confirmRegistration");
              localStorage.setItem("admission", admission);
            });
        }
      });
    });
  };

  return (
    <div>
      <div class="Background">
        <div className="Registration">
          <div className="Title">
            <h2>Please Verify</h2>
          </div>
          <div className="verify_details">
            <div>
              <label>Admission Number</label>
              <input
                value={admission}
                onChange={(e) => setAdmission(e.target.value)}
                type="text"
              ></input>
            </div>
            <div>
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              ></input>
            </div>
            <div>
              <label>Batch</label>
              <input
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                type="number"
              ></input>
            </div>
            <div className="submit_button">
              <button onClick={submit}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
