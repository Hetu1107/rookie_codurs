import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./mainchat.css"
import Chat from "./Chat";
import SideBar from "./SideBar";


function MainChat(){
    return(
        <div className="app_body">
            <Route exact path="/rooms/:roomId">
            <SideBar />
            <Chat />
          </Route>
          <Route exact path="/rooms">
            <SideBar />
          </Route>
        </div>
    )
}

export default MainChat;