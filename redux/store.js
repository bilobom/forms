import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


let middlewares=[thunk]

const store=createStore(rootReducer,{},compose(applyMiddleware(...middlewares)))
export default store