import { Button, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db, { storage } from "../FireBase";
import "./profile.css";
import firebase from "firebase";

function Profilealumni() {
  const [student, setStudent] = useState([]);
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");
  const [batch, setBatch] = useState("");
  const [projects, setProjects] = useState("");
  const [research, setResearch] = useState("");
  const [experience, setExperience] = useState("");
  const [branch, setBranch] = useState("");
  const [position, setPosition] = useState("");
  const [worked, setWorked] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url,setUrl]=useState("");
  console.log(localStorage.getItem("admission"));

  const handlechange = (e) => {
    // console.log("clicked")
    if (e.target.files[0]) {
      const uploadTask = storage
        .ref(`images/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              if (student) {
                db.collection("institute").doc(student.id).update({
                  url: url,
                });
              }
            });
        }
      );
    }
  };

  useEffect(() => {
    db.collection("institute").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().admission == localStorage.getItem("admission")) {
          setStudent({
            id: doc.id,
            data: doc.data(),
          });
          setName(doc.data()?.name);
          setAdmission(doc.data()?.admission);
          setBatch(doc.data()?.batch);
          setEmail(doc.data()?.email);
          setPhone(doc.data()?.phone);
          setUrl(doc.data()?.url)
        }
      });
    });
  }, []);
  console.log(student);

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
            setProjects(doc.data()?.projects);
            setBranch(doc.data()?.branch);
            setPosition(doc.data()?.currentPosition);
            setResearch(doc.data()?.research);
            setExperience(doc.data()?.experience);
            setWorked(doc.data()?.worked);
          });
        });
    }
  }, [student]);
  console.log(detail);
  console.log(name);

  return (
    <div className="profile_page">
      <div className="profile_page_left">
        <div className="profile_img">
          <img src={url} />
          <div className="profile_img_absolute">
            <h3>{name}</h3>
          </div>
        </div>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={handlechange}
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span">
            Change
          </Button>
        </label>
        <div className="line_profile"></div>
        <div className="profile_dis">
          <div className="profile_name">
            <div>
              <h2>Name</h2>
              <h3>{name}</h3>
            </div>
            <div>
              <h2>Passing Year</h2>
              <h3>{batch}</h3>
            </div>
            <div>
              <h2>Phone No.</h2>
              <h3
                onClick={() => {
                  navigator.clipboard.writeText(`${phone}`);
                }}
              >
                {phone}
              </h3>
            </div>
            <div>
              <h2>
                <i class="far fa-envelope"></i> Email
              </h2>
              <a href="">{email}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_page_right">
        <h2>
          <i class="fas fa-user"></i> About
        </h2>
        <div>
          <h3>Branch :</h3>
          <h4>{branch}</h4>
        </div>
        <div>
          <h3>Current Position :</h3>
          <h4>{position}</h4>
        </div>
        <div>
          <h3>Research Field :</h3>
          <h4>{research}</h4>
        </div>
        <div>
          <h3>Work Experience :</h3>
          <h4>{experience}</h4>
        </div>
        <div>
          <h3>Projects During College :</h3>
          <h4>{projects}</h4>
        </div>
        <div>
          <h3>Worked in :</h3>
          <h4>{worked}</h4>
        </div>
        <div id="profile_button">
          <button onClick={() => window.location.assign("/add_alumni")}>
            Edit
          </button>
          <button onClick={() => window.location.assign("/")}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Profilealumni;
