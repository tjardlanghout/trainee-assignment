import React, { Component } from "react";
import logo from './assets/images/FM-logo.png';
import "./assets/sass/app.scss";
import axios from "axios";
import Header from './Header'
import ReactHover from 'react-hover'




export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                
            </div>
        );
    }
}

