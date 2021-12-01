import {combineReducers,createStore,applyMiddleware} from 'redux'
import { firstReducer,secondReducer } from '../Reducers/reducers'
import thunk from 'redux-thunk'

const appState=combineReducers({
    messageData:firstReducer,
    dummyData:secondReducer
})

export const store=createStore(appState,applyMiddleware(thunk))

