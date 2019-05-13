import { combineReducers } from "redux";

const costReducer = (cost = [], action) => {
  switch (action.type) {
    case "UPDATE_ENTRY":
      return {
        ...cost,
        // [action.section]: {
        //   ...cost[action.section],
        //   ...action.payload
        // }
      };
    default:
      return cost;
  }
};

const rootReducer = combineReducers({
  CPF: costReducer
});
export default rootReducer;
