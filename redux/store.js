import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let middlewares = [thunk];

const initState = {
  CPF: {
    sectors: ["Fees On Supplier", "cost",'Costomer','Provisions'],
    Provisions:{
      imageSource:require('../assets/provision.png'),
      subtitle:''
    },
    Costomer:{
      imageSource:require('../assets/miscellaneous.png'),
      subtitle:'Condition of Payment',
      sections: ["Payment Conditon","Invoicing","Financial Fees",],
    },
    "Fees On Supplier": {
      imageSource: require("../assets/sectionB.png"),
      subtitle: "Conditions of Payement",
      sections: ["Risks"],
      Risks:{
        imageSource: require("../assets/workers2.png"),
        subtitle:'To be coverred on currency rates',
        entries: ["Supplier 1","supplier 2",'civil Works','Others'],
      }
    },
    cost: {
      imageSource: require("../assets/cost.png"),
      subtitle: "Conditions of Payement",
      sections: ["Manpower", "Procurement", "miscellaneous", "Cost"],
      Manpower: {
        imageSource: require("../assets/workers2.png"),
        entries: ["Engineer", "Technicien", "Rigger", "Helper"],
        Engineer: {
          ids: ["Rate Dzd", "Men/Month", "Cost Euros"],
          "Rate Dzd": { value: "", unit: "Dzd", type: "numeric" },
          "Men/Month": { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        Technicien: {
          ids: ["Rate Dzd", "Men/Month", "Cost Euros"],
          "Rate Dzd": { value: "", unit: "Dzd", type: "numeric" },
          "Men/Month": { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        Rigger: {
          ids: ["Rate Dzd", "Men/Month", "Cost Euros"],
          "Rate Dzd": { value: "", unit: "Dzd", type: "numeric" },
          "Men/Month": { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        Helper: {
          ids: ["Rate Dzd", "Men/Month", "Cost Euros"],
          "Rate Dzd": { value: "", unit: "Dzd", type: "numeric" },
          "Men/Month": { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        }
      },
      Cost: {
        imageSource: require("../assets/cost.png"),
        entries: []
      },
      Procurement: {
        imageSource: require("../assets/procurement.png"),
        entries: [
          "Local Purch",
          "Supplier 1",
          "Supplier 2",
          "civil works",
          "others"
        ],
        "Local Purch": {
          ids: ["conditions", "Delay", "Cost Euros"],
          conditions: { value: "", unit: "", type: "default" },
          Delay: { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        "Supplier 1": {
          ids: ["conditions", "Delay", "Cost Euros"],
          conditions: { value: "", unit: "", type: "default" },
          Delay: { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        "Supplier 2": {
          ids: ["conditions", "Delay", "Cost Euros"],
          conditions: { value: "", unit: "", type: "default" },
          Delay: { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        "civil works": {
          ids: ["conditions", "Delay", "Cost Euros"],
          conditions: { value: "", unit: "", type: "default" },
          Delay: { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        others: {
          ids: ["conditions", "Delay", "Cost Euros"],
          conditions: { value: "", unit: "", type: "default" },
          Delay: { value: "", unit: "", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        }
      },
      miscellaneous: {
        imageSource: require("../assets/miscellaneous.png"),
        entries: ["Custom Duties", "Shipping & Insurances, Transport"],
        "Custom Duties": {
          ids: ["Delay", "Cost Euros"],
          Delay: { value: "", unit: "%", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        },
        "Shipping & Insurances, Transport": {
          ids: ["Delay", "Cost Euros"],
          Delay: { value: "", unit: "%", type: "numeric" },
          "Cost Euros": { value: "", unit: "  €", type: "numeric" }
        }
      }
    }
  }
};
const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(...middlewares))
);
export default store;
