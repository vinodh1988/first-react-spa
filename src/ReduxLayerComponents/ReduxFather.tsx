import  MessageBoxHOC  from "../redux/Hocs/MessageBoxHOC";
import {Provider} from 'react-redux'
import { store } from "../redux/Store/store";
import IsolatedHOC from "../redux/Hocs/IsolatedHOC";
import TemperatureBox from "./TemparatureBox";
import TemperatureBoxHOC from "../redux/Hocs/TemperatureBoxBox";
import TemperatureHOC from "../redux/Hocs/TemperatureHOC";
import { readTemperatureData } from "../redux/Actions/TemperatureAction";

console.log(store)
store.dispatch(readTemperatureData("Chennai"))

const ReduxFather=()=>{
    return(
        <div>
            <h3>REDUX LAYER</h3>
        <Provider store={store}>
        <MessageBoxHOC></MessageBoxHOC>
        <TemperatureBoxHOC></TemperatureBoxHOC>
        <TemperatureHOC city="" temp="" humidity="" feels_like=""></TemperatureHOC>
        <div style={{overflow: "hidden"}} className="card">
             <IsolatedHOC/>
          </div>
        </Provider>
        </div>
    )
}

export default ReduxFather;