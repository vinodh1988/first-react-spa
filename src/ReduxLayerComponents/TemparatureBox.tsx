import { useState } from 'react';
import {msgbox} from './types';

 const TemperatureBox=({cities,addCity,getTemparature}:any)=>{
    const [city,setCity]=useState("");
    const [current,setCurrent]=useState("");
    return(
        <div className="card">
        <div className="card-body">
          <h4 className="card-title">Weather Data</h4>
          <p className="card-text">
                  <select onChange={(e)=>{setCurrent(e.target.value)}}>
                      {cities.map((x:any)=><option key={x}>{x}</option>)}
                  </select>
                  <button className="btn btn-dark" 
                  onClick={()=>getTemparature(current)}>
                      Get Temperature
                  </button>
          </p>
        <div className="alert alert-dark">
          <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
          <button className="btn btn-dark" onClick={()=>addCity(city)}>
              add New City</button>
         </div>
        </div>
      </div>
    );
}

export default TemperatureBox;