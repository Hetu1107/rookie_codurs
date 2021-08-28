import React, { useEffect, useState } from "react";
import db from "../FireBase";
import "./add_alumni.css";
function AddAlumni() {
  const [student, setStudent] = useState([]);
  const [detail, setDetail] = useState([]);
  const [research, setResearch] = useState("");
  const [experience, setExperience] = useState("");
  const [position, setPosition] = useState("");
  const [worked, setWorked] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    db.collection("institute").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().admission == localStorage.getItem("admission")) {
          setStudent({
            id: doc.id,
            data: doc.data(),
          });
          setEmail(doc.data()?.email);
          setPhone(doc.data()?.phone);
        }
      });
    });
  }, []);
  useEffect(() => {
    if (student) {
      db.collection("institute")
        .doc(student.id)
        .collection("details")
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            setDetail({
              id: doc.id,
              data: doc.data(),
            });
            setPosition(doc.data()?.currentPosition);
            setResearch(doc.data()?.research);
            setExperience(doc.data()?.experience);
            setWorked(doc.data()?.worked);
          });
        });
    }
  }, [student]);
  const save = (e) => {
    e.preventDefault();
    db.collection("institute")
      .doc(student.id)
      .collection("details")
      .doc(detail.id)
      .update({
        currentPosition: position,
        experience: experience,
        research: research,
        worked: worked,
      })
      .then(() => {
        db.collection("institute")
          .doc(student.id)
          .update({
            phone: phone,
            email: email,
          })
          .then(() => {
            window.location.assign("/profilealumni");
          });
      });
  };
  return (
    <div className="Add_item">
      <div className="form" id="form">
        <form action="" id="form2">
          <div class="cont">
            <div id="" class="form-contro">
              <input
                type="text"
                name=""
                id="username"
                autocomplete=""
                required
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <label for="text">Current Postion</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="text"
                name=""
                id="username"
                value={research}
                onChange={(e) => setResearch(e.target.value)}
                autocomplete=""
                required
              />
              <label for="text">Research Field</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="text"
                name=""
                id="username"
                autocomplete=""
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
              <label for="text">Work Experience</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="text"
                name=""
                id="username"
                autocomplete=""
                value={worked}
                onChange={(e) => setWorked(e.target.value)}
                required
              />
              <label for="text">Worked in</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="email"
                name=""
                id="username"
                autocomplete=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label for="email">Email</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="number"
                name=""
                id="username"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autocomplete=""
                required
              />
              <label for="number">Phone Number</label>
            </div>
          </div>
        </form>
        <div className="add_item_button">
          <button onClick={() => window.location.assign("/profilealumni")}>
            Back
          </button>
          <button onClick={save}>Update</button>
        </div>
      </div>
    </div>
  );
}
export default AddAlumni;
