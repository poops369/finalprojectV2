import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { FooterContainer } from "./containers/footer";
import FormPage from "./components/Form/Form";
import HelpForDev from "./components/profil/Profil";
import HelpDev from "./components/profil/UserProfile";
import EventCard from "./components/eventCard/EventCard.js";
// import EventCard fr
function App() {
    return (
        <div className="App">
            <Navbar />
            <HomePage />
            <FooterContainer />
            <HelpForDev />
            <FormPage />
            <EventCard />
            <HelpDev />
        </div>
    );
}

export default App;
