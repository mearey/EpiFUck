import logo from './logo.svg';
import './App.css';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import { Data1} from './diseasedata';
import { Bar } from "react-chartjs-2";
import "./styles.css";
import sign_up from "./DataFunctions.js";
import * as React from 'react';
import BasicTabs from './tabs.js';
import image from './image.png'


function App() {
  
  
  return (
  <div style={{backgroundImage: `url(${image}`, height:'1000px'}}>
    <BasicTabs></BasicTabs>
  </div>
  );
}

export default App;
