import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hat from "./Hat";
import { getTitle } from "./TitleUtil";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {getTitle()}
                </a>
            </header>
            <Hat />
        </div>
    );
}

export default App;
