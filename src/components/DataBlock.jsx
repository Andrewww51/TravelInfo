
import './DataBlock.css'

function DataBlock(props) {

    
    let temp = Object.values(props.clickedCity.data.attributes.safety);
    let text = temp[0].text;
    let value = temp[0].value;
    let subText = temp[0].subText;
    console.log(props)
    console.log(temp)
    console.log(temp[0].text)

    let budgetTemp = Object.values(props.clickedCity.data.attributes.budget);
    let budgetText = budgetTemp[0].text;
    let budgetValue = budgetTemp[0].value;
    let budgetSubText = budgetTemp[0].subText;

    let covidTemp = Object.values(props.clickedCity.data.attributes.covid);
    let covidText = covidTemp[0].text;
    let covidValue = covidTemp[0].value;
    let covidUrl = covidTemp[0].url;

    let photoTemp = props.clickedCity.included;
    let photoUrl = photoTemp[1].attributes.image.large;

    return(
        <>
        <div className="block-wrapper">
            <div className="block">
                <p>About the city</p>
                <div>{props.clickedCity.data.attributes.short_name}</div>
                <div>Population: {props.clickedCity.data.attributes.population}</div>
                <div><a href={props.clickedCity.data.attributes.kayak_car_rental_url}>Car rental</a></div>
            </div>
            <div className="block">
                <p>Safety</p>
                <div>{text}</div>
                <div>{value}</div>
                <div>{subText}</div>
            </div>
            <div className="block">
                <p>Budget</p>
                <div>{budgetText}</div>
                <div>{budgetValue}</div>
                <div>{budgetSubText}</div>
            </div>
            <div className="block">
                <p>Covid</p>
                <div>{covidText}</div>
                <div>{covidValue}</div>
                <div><a href={covidUrl}>Covid status</a></div>
            </div>
            
        </div>
        {/* <img src={photoUrl}/> */}

        </>
    )
}

export default DataBlock