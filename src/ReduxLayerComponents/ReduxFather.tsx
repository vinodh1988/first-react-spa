import  MessageBoxHOC  from "../redux/Hocs/MessageBoxHOC";
import {Provider} from 'react-redux'
import { store } from "../redux/Store/store";
import IsolatedHOC from "../redux/Hocs/IsolatedHOC";
import TemperatureBox from "./TemparatureBox";
import TemperatureBoxHOC from "../redux/Hocs/TemperatureBoxBox";

const ReduxFather=()=>{
    return(
        <div>
            <h3>REDUX LAYER</h3>
        <Provider store={store}>
        <MessageBoxHOC></MessageBoxHOC>
        <TemperatureBoxHOC></TemperatureBoxHOC>
        <div style={{overflow: "hidden"}} className="card">
             <IsolatedHOC/>
          </div>
        </Provider>
        </div>
    )
}

export default ReduxFather;