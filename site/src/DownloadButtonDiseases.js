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
       items.push(<option value={diseaseList[i]}>{diseaseList[i]}</option>)
  }
  return items;
}

async function getData(value) {

      const data = [];
      const events = Data1[0]['events'];
      for (var i = 0; i < events.length; i++){
        var item = Data1[0]['events'][i]['attribute'];
        if (item['disease'] == value) {
          data.push(item)
        }
      }
      //console.log(data)
      return await data;
}

export default function DownloadButtonDiseases() {

  const [value, setValue] = React.useState('covid19');
  var thing;
  getData('covid19')
  .then(r=>{
    thing = r
  })

  const [result, setResult] = React.useState(JSON.stringify(thing));
  const [downloaded, setDownloaded] = React.useState(false);


  const handleChange = (event) => {
    event.preventDefault();

    setValue(event.target.value);
    getData(event.target.value)
    .then((r)=> {
      console.log(r)
      setResult(JSON.stringify(r));
    })
    
 
  };

  const downloadTxtFile = (result) => {
      setDownloaded(true)
      console.log(result.target.value)
      // text content
      const texts = [result.target.value]
      // file object
      const file = new Blob(texts, {type: 'text/plain'});
      // anchor link
      const element = document.createElement("a");
      element.href = URL.createObjectURL(file);
      element.download = "dataset" + Date.now() + ".json";
      // simulate link click
      document.body.appendChild(element);
      // Required for this to work in FireFox
      element.click();
      handleShowSuccessMessage()
  }

  const handleShowSuccessMessage = () => {
    setDownloaded(true)
    setTimeout(() => {
      setDownloaded(false)
    }, 3000);
  }
  
  
  return (
   
    <div className="App">
     
      <label>

        Download data filtered by disease

        <select  name="disease" value={value} onChange={handleChange}>

          {createSelectItems(getDiseaseList())}

        </select>

      </label>

      <div className="btnDiv">
        <button id="downloadBtn" onClick={downloadTxtFile} value={result}>Download</button>
      </div>
      {downloaded === true
        ? <>
          <div name='success message' style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
            Successfully Downloaded File
          </div>
        </>
        : <>
        </>
      }
    </div>
  );
}
