import  MessageBoxHOC  from "../redux/Hocs/MessageBoxHOC";
import {Provider} from 'react-redux'
import { store } from "../redux/Store/store";

const ReduxFather=()=>{
    return(
        <div>
            <h3>REDUX LAYER</h3>
        <Provider store={store}>
        <MessageBoxHOC></MessageBoxHOC>
        </Provider>
        </div>
    )
}

export default ReduxFather;