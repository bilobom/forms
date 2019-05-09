import { combineReducers } from 'redux';


const costReducer=(cost=[],action)=>{
    switch (action.type) {
        case 'UPDATE':
                return cost
        default:
            return cost
    }
}



const rootReducer = combineReducers({
    cost: costReducer,
})
export default rootReducer