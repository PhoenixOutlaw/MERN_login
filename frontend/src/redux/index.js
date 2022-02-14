import {combineReducers} from 'redux'
import {account, log }from './reducers'

const reducers = combineReducers({
    logged:log,
    account:account
})

export default reducers;

