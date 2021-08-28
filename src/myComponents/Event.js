import React from 'react';
import "./event.css"

function Event(){


    return(
        <div class="Event">
                <div class="heading" id="up-event"><h1 class="hh">UPCOMING EVENTS</h1></div>
    <div class="container">
       <a href="event_dis.html"><div class="box">
            <div class="img">
                <img src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg" class="ii" />
            </div>
            <div class="content">
                <div class="date">
                    <p>11-JAN-2021  11:00 AM - 1:00 PM  <i class="far fa-calendar"></i></p>
                    <h2>EVENT NAME</h2>
                    <p>topic1  topic2  topic3  +more</p>
                </div>
            </div>
        </div></a>
        <a href="#">
        <div class="box">
            <div class="img">
                <img src="https://image.freepik.com/free-vector/music-event-banner-template-with-photo_52683-12627.jpg" alt="" class="ii" /> 
            </div>
            <div class="content">
                <div class="date">
                    <p>11-JAN-2021  11:00 AM - 1:00 PM      <i class="far fa-calendar"></i></p>
                    <h2>EVENT NAME</h2>
                    <p>topic1  topic2  topic3  +more </p>
                </div>
            </div>
        </div></a>
        <a href="event_dis.html"><div class="box">
            <div class="img">
                <img src="https://image.freepik.com/free-vector/music-event-banner-design-template-festival-concert-party_85212-64.jpg" alt="" class="ii" />
            </div>
            <div class="content">
                <div class="date">
                    <p>11-JAN-2021  11:00 AM - 1:00 PM      <i class="far fa-calendar"></i></p>
                    <h2>EVENT NAME</h2>
                    <p>topic1  topic2  topic3  +more</p>
                </div>
            </div>
        </div></a>
        <a href="event_dis.html"><div class="box">
            <div class="img">
                <img src="https://image.freepik.com/free-vector/trendy-event-banner-template_85212-590.jpg" alt="" class="ii" />
            </div>
            <div class="content">
                <div class="date">
                    <p>11-JAN-2021  11:00 AM - 1:00 PM       <i class="far fa-calendar"></i></p>
                    <h2>EVENT NAME</h2>
                    <p>topic1  topic2  topic3  +more</p>
                </div>
            </div>
        </div></a>
        <a href="event_dis.html"><div class="box">
            <div class="img">
                <img src="https://image.freepik.com/free-vector/electro-music-night-party-banner-template_85212-173.jpg" alt=""  class="ii" />
            </div>
            <div class="content">
                <div class="date">
                    <p>11-JAN-2021  11:00 AM - 1:00 PM       <i class="far fa-calendar"></i></p>
                    <h2>EVENT NAME</h2>
                    <p>topic1  topic2  topic3  +more</p>
                </div>
            </div>
        </div></a>
        <a href="event_dis.html"><div class="box">
            <div class="img">
                <img src="https://image.freepik.com/free-vector/music-event-banner-template-with-photo_52683-13689.jpg" alt="" class="ii" />
            </div>
            <div class="content">
                <div class="date">
                    <p>11-JAN-2021  11:00 AM - 1:00 PM     <i class="far fa-calendar"></i></p>
                    <h2>EVENT NAME</h2>
                    <p>topic1  topic2  topic3  +more</p>
                </div>
            </div>
        </div></a>
    </div>
    <div className="event_button">
        <button>Back</button>
        <button>Add-Event</button>
    </div>
        </div>
    );
}
export default Event;