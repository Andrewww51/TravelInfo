
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState, useEffect} from "react";
import DataBlock from './components/DataBlock';
import Searcher from './components/Searcher';
import { createClient } from 'pexels';



function App() {

  const[data, setData] = useState("");
  const[inputData, setInputData] = useState("")

  var auth_key = Buffer.from('258604de275fb6514daef8612d7211bf:4d5d9797e0176fb4e7a1dcb524bd87fb').toString('base64');



  async function fetchData() {
    
    const url = `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${inputData}`;

    const responseJson = await fetch(url, {
        headers: {
            'Authorization': `Basic ${auth_key}`
          }
        })
        .then(response => response.json())
      
        setData(responseJson);
  }



useEffect(()=> {

  if(inputData.length > 3){
    fetchData();
  }
  console.log(inputData)

},[inputData])



  return (
    <div className="App">

      <p>Travel information</p>
      <input onChange={(e)=> setInputData(e.target.value)} type="text" placeholder="City"/>
      {data.data? <Searcher dataFetch={data} /> : ""}
      
      {data.data? console.log(data) : ""}
      
      {/* {data.data? <DataBlock dataFetch={data} /> : ""} */}

    </div>
  );
}

export default App;
