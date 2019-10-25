import { combineReducers } from 'redux'
import auth from './Auth'
import booking from './Booking'

const rootReducer = combineReducers({
    Auth: auth,
    Booking: booking
})

export default rootReducer