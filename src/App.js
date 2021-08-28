import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./myComponents/Chat";
import First from "./myComponents/first_page";
import Login from "./myComponents/Login";
import Search from "./myComponents/Search";
import SideBar from "./myComponents/SideBar";

import Profile from "./myComponents/Profile_for_viewer";
import Profilealumni from "./myComponents/Profile_for_alumni";
import RegistrationPage from "./myComponents/RegistrationPage";
import LoginPage from "./myComponents/LoginPage";
import ConfirmedRegistration from "./myComponents/ConfirmedRegistration";

import AddEvent from "./myComponents/add_event";
import AddAlumni from "./myComponents/add_alumni";
import MainChat from "./myComponents/mainchat";
import Event from "./myComponents/Event";



function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <First />
          </Route>
          <Route exact path="/add_event">
            <AddEvent/>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/add_alumni">
            <AddAlumni/>
            </Route>
          <Route exact path="/event">
            <Event/>
          </Route>
          <Route exact path="/profilealumni">
            <Profilealumni />
          </Route>
          <Route exact path="/register">
            <RegistrationPage />
          </Route>
          <Route exact path="/confirmRegistration">
            <ConfirmedRegistration />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/add_event">
            <AddEvent/>
          </Route>
          <Route path="/event" exact>
            <Event />
          </Route>
          <Route path="/rooms">
            <MainChat/>
          </Route>
          
        </Switch>
      </Router>
      
      {/* <div className="app_body"> */}
      {/* <Router>
        <Switch>
          <Route exact path="/rooms/:roomId">
            <SideBar />
            <Chat />
          </Route>
          <Route exact path="/rooms">
            <SideBar />
          </Route>
        </Switch>
      </Router> */}
      {/* </div> */}
    </div>
    
  );
  
}

export default App;
