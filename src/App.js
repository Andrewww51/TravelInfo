
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState, useEffect} from "react";


function App() {

  const[data, setData] = useState("");

  var auth_key = Buffer.from('bd67db7e93de3cd54f544726b6cf0efd:6f1e4a4079624851d13a6357cb247eb3').toString('base64');

// var options = {
//   'method': 'GET',
//   'hostname': 'api.roadgoat.com',
//   'port': 80,
//   'path': '/api/v2/destinations/auto_complete?q=barcelona',
//   'headers': {
//     'Authorization': `Basic ${auth_key}`
//   },
//   'maxRedirects': 20
// };



//   async function fetchCurrentWeather(city) {
//     const url = `${baseURL}/${currentWeatherAPI}?${weatherAPIKey}&q=${city}`;
//     // console.log(url)

//     const response = await fetch(url);
//     const responseJson = await response.json();

//     return responseJson;
// };


async function fetchData() {
  const url = `https://api.roadgoat.com/api/v2/destinations/6588544`;

  const responseJson = await fetch(url, {
      headers: {
          // 'Authorization': "Basic bd67db7e93de3cd54f544726b6cf0efd:6f1e4a4079624851d13a6357cb247eb3"
          'Authorization': `Basic ${auth_key}`
        }
      })
      .then(response => response.json())
    
      setData(responseJson);
      
}


useEffect(()=> {

  fetchData();

},[])

// fetchData(); 


// async function fetchData() {

//   fetch("http://localhost:6789/tasks", {
//       method: "POST",
//       headers: {"Content-Type": "application/json"}
// }




  return (
    <div className="App">
      <p>Test text</p>
      {data.data? console.log(data) : ""}
    </div>
  );
}

export default App;
