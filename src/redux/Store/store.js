import {combineReducers,createStore} from 'redux'
import { firstReducer,secondReducer } from '../Reducers/reducers'

const appState=combineReducers({
    messageData:firstReducer,
    dummyData:secondReducer
})

export const store=createStore(appState)