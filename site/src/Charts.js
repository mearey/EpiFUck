import logo from './logo.svg';
import './App.css';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import { Data1} from './diseasedata';
import { Bar } from "react-chartjs-2";
import "./styles.css";
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


function getDiseaseList() {
  var countryList = [];
  const events = Data1[0]['events'];
  for (var i = 0; i < events.length; i++){
    var item = Data1[0]['events'][i]['attribute'];
    if ((!countryList.includes(item['disease'])) && typeof(item['disease']) == typeof("example") ) {
      console.log(item['disease'])
      if (item['disease'].length <= 10) {
        countryList.push(item['disease'])
      }
    }
  }

  return countryList;
}

function createSelectItems(diseaseList) {
  let items = [];
  for (let i = 0; i <= diseaseList.length; i++) {             
       items.push(<MenuItem value={diseaseList[i]}>{diseaseList[i]}</MenuItem>)
  }
  return items;
}


async function getData(value) {
      var countryList = [];
      var countryNumbers = [];
      const events = Data1[0]['events'];
      for (var i = 0; i < events.length; i++){
        var item = Data1[0]['events'][i]['attribute'];
        if (item['disease'] == value) {
          if (!countryList.includes(item['location'])) {
            countryList.push(item['location'])
            countryNumbers.push(1);
          } else {
            countryNumbers[countryList.indexOf(item['location'])] += 1
          }
        }
      }

      return await [countryList, countryNumbers];
}

export default function Charts() {

  const [value, setValue] = React.useState('covid19');
  var thing;
  getData('covid19')
  .then(r=>{
    thing = r
  })

  const [xaxis, setx] = React.useState(
    {
        // Name of the variables on x-axies for each bar
        labels: [],
        datasets: [
          {
            // Label for bars
            label: "total count/value",
            // Data or value of your each variable
            data: [],
            // Color of each bar
            backgroundColor: ["aqua", "green", "red", "yellow"],
            // Border color of each bar
            borderColor: ["aqua", "green", "red", "yellow"],
            borderWidth: 0.5,
          },
        ],
      }
    );

  const handleChange = (event) => {
    event.preventDefault();

    setValue(event.target.value);
    getData(event.target.value)
    .then((r)=> {
      console.log(r)
      setx(
        {
            // Name of the variables on x-axies for each bar
            labels: r[0],
            datasets: [
              {
                // Label for bars
                label: "Number of reports",
                // Data or value of your each variable
                data: r[1],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }
      );
    })
    
 
  };
  
  return (
   
    <div className="App">
      <label>
        <div style={{ fontWeight: 'bold', fontSize:'40px', position:'relative', bottom:'-20px', fontFamily:'helvetica sans-serif' }}>
          Disease
        </div>
        <br/><br/>
        {/* <select value={value} onChange={handleChange}> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          name="disease"
          defaultValue='ansih'
          value={value}
          onChange={handleChange}
          sx={{width:'500px'}}
        >

          {createSelectItems(getDiseaseList())}
        </Select>
        <br/><br/>
        <div style={{ maxWidth: "2000px" }}>
        <Bar
          data={xaxis}
          name='graph'
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
      </label>
    </div>
  );
}
