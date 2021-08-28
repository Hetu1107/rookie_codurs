import React, { useEffect, useState } from "react";
import db from "../FireBase";
import "./event.css";

function Event() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("event").onSnapshot((snapshot) => {
      setEvents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(events);

  const add = () => {
    window.location.assign("/add_event");
  };
  return (
    <div class="Event">
      <div class="heading" id="up-event">
        <h1 class="hh">UPCOMING EVENTS</h1>
      </div>
      <div class="container">
        {events.map((event) => {
          return (
            <a href={event.data?.link}>
              <div class="box">
                <div class="img">
                  <img
                    src="https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/etouches-post-alimni-events.jpg"
                    class="ii"
                  />
                </div>
                <div class="content">
                  <div class="date">
                    <p>
                      {event.data?.eventDate}
                      <i class="far fa-calendar"></i>
                    </p>
                    <h2>{event.data?.eventName}</h2>
                    <p>{event.data?.topics}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="event_button">
        <button onClick={()=>window.location.assign("/")}>Back</button>
        <button onClick={add}>Add-Event</button>
      </div>
    </div>
  );
}
export default Event;
