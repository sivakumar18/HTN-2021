import React from 'react';
import './App.css';
import Button from './component/Button';
import DropdownMenu from './component/DropdownMenu';
import Distance from './component/Distance';
import ProgressTile from './component/ProgressTile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./resources/logo.png";

function App() {
  return (
    <div className="container">
      <div className="logoSpace">
        <img src={logo} alt="Logo" />
        <ProgressTile text1="LOCATION" text2="COMPLETED"/>
        <ProgressTile text1="PIN" text2="COMPLETED"/>
        <ProgressTile text1="QUESTIONNAIRE" text2="IN PROGRESS"/>
        <ProgressTile text1="VOTING" text2="NOT STARTED"/>
        <ProgressTile text1="RESULTS" text2="NOT STARTED"/>
      </div>
      <div className="contentPane">
        <header className="App-header">
        <h2>Click to fill in information for each category and rank boxes from most to least important.</h2>
          <DropdownMenu />
        </header>
      </div>
    </div>
  );
}



export default App;
