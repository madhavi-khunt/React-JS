import {combineReducers, legacy_createStore} from 'redux'
import reducer from './Counter/reducer'
import productreducer from './Product/productreducer'


const myreducer=combineReducers({
    reducer,
    productreducer
})

const store=legacy_createStore(myreducer)

export default store
