import './App.css';

import { Data1} from './diseasedata';
import * as React from 'react';

function getCountryList() {
  var countryList = [];
  const events = Data1[0]['events'];
  for (var i = 0; i < events.length; i++){
    var item = Data1[0]['events'][i]['attribute'];
    if (!countryList.includes(item['location'])) {
      countryList.push(item['location'])
    }
  }

  return countryList;
}

function createSelectItems(countryList) {
  let items = [];
  for (let i = 0; i <= countryList.length; i++) {             
       items.push(<option value={countryList[i]}>{countryList[i]}</option>)
       //here I will be creating my options dynamically based on
       //what props are currently passed to the parent component
  }
  return items;
}  

async function getData(value) {

      const data = [];
      const events = Data1[0]['events'];
      for (var i = 0; i < events.length; i++){
        var item = Data1[0]['events'][i]['attribute'];
        if (item['location'] === value) {
          data.push(item)
        }
      }
      //console.log(data)
      return await data;
}

export default function DownloadButtonLocation() {

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

        Download data filtered by location

        <select  name="disease" value={value} onChange={handleChange}>

          {createSelectItems(getCountryList())}

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
