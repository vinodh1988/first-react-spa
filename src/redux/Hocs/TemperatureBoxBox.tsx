import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import TemperatureBox from '../../ReduxLayerComponents/TemparatureBox'
import { readTemperatureData } from '../Actions/TemperatureAction'



const mapStateToProps=(state:any)=>{
    return {cities: state.messageData.cities}
}

const mapActionToProps=(dispatch:any)=>{
    return bindActionCreators(
        {addCity:
            (city)=>{
        return {type:"CITY_ACTION",data:city}
         },
         getTemparature:
         (city)=>{
        
        return readTemperatureData(city)
      }
    },dispatch)
}

const TemperatureBoxHOC=connect(mapStateToProps,mapActionToProps)(TemperatureBox)

export default TemperatureBoxHOC