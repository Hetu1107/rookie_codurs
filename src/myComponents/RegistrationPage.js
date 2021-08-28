import React, { useEffect, useState } from "react";
import "./RegistrationPage.css";

function RegistrationPage() {
  const [admission, setAdmission] = useState("");
  const submit = () => {
    window.location.assign("/confirmRegistration");
    localStorage.setItem("admission", admission);
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
              <input type="text"></input>
            </div>
            <div>
              <label>Batch</label>
              <input type="number"></input>
            </div>
            <div className="submit_button">
              <button onClick={submit}>search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
