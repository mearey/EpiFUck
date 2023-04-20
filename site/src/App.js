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


function App() {
  
  
  return (
  <BasicTabs></BasicTabs>
  );
}

export default App;
