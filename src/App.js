import React, {Component} from "react";
import logo from './assets/images/FM-logo.png';
import "./assets/sass/app.scss";
import axios from "axios";


export default class App extends Component {

    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello! Welcome to the assignment for FLOXX Meetings.
                </p>
            </div>
        );
    }
}

