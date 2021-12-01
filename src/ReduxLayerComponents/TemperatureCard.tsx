import { temperature } from "./types";

const TemperatureCard=({city,temp,feels_like,humidity}:temperature)=>{
    return(
<div className="card" style={{width:"400px"}}>
  <img className="card-img-top" 
  src="https://image.shutterstock.com/image-vector/checked-body-temperature-infrared-termometer-260nw-1833005602.jpg"
   alt="Card image"/>
   
  <div className="card-body">
  <h4 className="card-title">{city}</h4>
        <ul>
            <li>Temperature: {temp}</li>
            <li>Feels Like: {feels_like}</li>
            <li>Humidity: {humidity}</li>
        </ul>
  </div>
</div>
    )
}

export default TemperatureCard