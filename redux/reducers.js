import { combineReducers } from "redux";
import { createReducer } from "redux-starter-kit";

const CPFReducer = createReducer(
  {},
  {
    checkBox: (CPF = {}, action) => {
      const { section, sector, entry, id } = action.payload;
      CPF[sector][section][entry][id].checked ^= true;
    },
    input: (CPF = {}, action) => {
      const { section, sector, entry, id, value } = action.payload;
      CPF[sector][section][entry][id].value = value;
    }
  }
);

const rootReducer = combineReducers({
  CPF: CPFReducer
});
export default rootReducer;
