import axios from "axios"

const TemperatureAction=(data)=>{
    return{
        type:"TEMPERATURE_ACTION",
        data:data
    }
}

export const readTemperatureData=(city)=>{
  return  async (dispatch)=>{
        try{
       const response =await axios("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=84537705ffe70fde1b945b4254dff0c7")
            dispatch(TemperatureAction({
                city: city,
                temp: Math.round((response.data.main.temp)-273)+" C",
                feels_like: Math.round ((response.data.main.feels_like)-273)+" C",
                humidity: response.data.main.humidity
            }))
        }

        catch(e){
            dispatch(
                TemperatureAction({
                    city: city,
                temp: "NA",
                feels_like: "NA",
                humidity: "NA"
                }))
    
        }
    }
}