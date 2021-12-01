import {connect} from 'react-redux';
import TemperatureCard from '../../ReduxLayerComponents/TemperatureCard'; 


const mapStateToProps=(state:any)=>{
return{
   city: state.messageData.temperatureData.city,
   temp: state.messageData.temperatureData.temp,
   humidity: state.messageData.temperatureData.humidity,
   feels_like:  state.messageData.temperatureData.feels_like

}
}
const TemperatureHOC=connect(mapStateToProps,null)(TemperatureCard) 

export default TemperatureHOC;