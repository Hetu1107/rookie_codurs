import React, { useEffect, useState } from "react";
import db from "../FireBase";
import "./add_event.css";
function AddEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [topic, setTopic] = useState("");
  const [formLink, setFormLink] = useState("");

  const submit = (e) => {
    e.preventDefault();
    db.collection("event")
      .add({
        eventName: eventName,
        eventDate: eventDate,
        topics: topic,
        link: formLink,
      })
      .then(() => {
        window.location.assign("/event");
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
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                id="username"
                autocomplete=""
                required
              />
              <label for="text">Event Name</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="text"
                name=""
                id="username"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                autocomplete=""
                required
              />
              <label for="text">Event Date</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="text"
                name=""
                id="username"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                autocomplete=""
                required
              />
              <label for="text">Topics</label>
            </div>
            <div id="" class="form-contro">
              <input
                type="url"
                name=""
                id="username"
                value={formLink}
                onChange={(e) => setFormLink(e.target.value)}
                autocomplete=""
                required
              />
              <label for="url">Form Link</label>
            </div>
          </div>
        </form>
        <div className="add_item_button">
          <button onClick={() => window.location.assign("/event")}>Back</button>
          <button type="submit" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddEvent;
