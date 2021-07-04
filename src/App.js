import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="App">
            <Header />

            <div className="ContentContainer">
                <div className="Nav">
                    <Nav />
                </div>
                
                <div className="AppContent">

                    <Route path="/profile"
                        render={() => <Profile />} />

                    <Route path="/dialogs"
                        render={() => <DialogsContainer />} />
                </div>

            </div>

        </div>
    );
}

export default App;
