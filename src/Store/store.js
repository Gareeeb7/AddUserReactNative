import {configureStore} from '@reduxjs/toolkit'
import RootReducer from '../Constants/RootReducer'

const store = configureStore({
    reducer:RootReducer
})

export default store