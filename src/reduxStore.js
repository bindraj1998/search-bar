import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'

const middleware = [reduxThunk]; 
const initialState= {};

const store = createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;