import DataBlock from './DataBlock'
import {useState} from 'react'
import { createClient } from 'pexels';
import './Searcher.css'


function Searcher(props) {

    const[clickedId, setClickedId] = useState("")
    const[photo, setPhoto] = useState("")

    const client = createClient('563492ad6f917000010000012b71da8e1a3c42a18663456f44f69a20');
    // const query = 'Nature';
    // client.photos.search({ query, per_page: 1 }).then(photos => {...});

    async function clicker(city, id) {
        fetchData(id)
        console.log(city)
        await fetchPhoto(city)
        console.log(photo)
    }

    async function fetchPhoto(city) {
        // client.photos.search({ city, per_page: 1 }).then(photos => setPhoto(photos));
        const url = `https://api.pexels.com/v1/search?query=${city}`;

        const responseJSON = await fetch(url, {
            headers: {
                Authorization: '563492ad6f917000010000012b71da8e1a3c42a18663456f44f69a20'}
            })
            .then(response => response.json())
            // .then(resp => console.log(resp))

            await setPhoto(responseJSON)
    }

    async function fetchData(id) {
        var auth_key = Buffer.from('258604de275fb6514daef8612d7211bf:4d5d9797e0176fb4e7a1dcb524bd87fb').toString('base64');
        const url = `https://api.roadgoat.com/api/v2/destinations/${id}`;

        const responseJson = await fetch(url, {
            headers: {
                'Authorization': `Basic ${auth_key}`
              }
            })
            .then(response => response.json())
          
            setClickedId(responseJson);
            
      }

    return(
        <>
            <ul>
                {props.dataFetch.data.map((city,i)=> (
                    <li key={i}  id={city.id} onClick={(e)=> clicker(city.attributes.short_name, city.id)}>{city.attributes.name}</li>
                ))}
            </ul>
            {photo.photos? <img src={photo.photos[0].src.original}/> : ""}        
            {clickedId.data? <DataBlock clickedCity={clickedId} /> : ""}
            {/* <DataBlock clickedCity={clicked}/> */}
        </>
    )
}

export default Searcher