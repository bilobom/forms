import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let middlewares = [thunk];

const initState = {
  CPF: {
    
    sectors: [
      "Fees On Supplier",
      "cost",
      "Costomer",
      "Provisions",
      "Structure"
    ],
    Provisions: {
      imageSource: require("../assets/provision.png"),
      subtitle: ""
    },
    Costomer: {
      imageSource: require("../assets/miscellaneous.png"),
      subtitle: "Condition of Payment",
      sections: [
        "Payement Condition",
        "Invoicing",
        "Financial Fees"
        /* 'Subcontrating' */
      ],
      "Payement Condition": {
        imageSource: require("../assets/workers2.png"),
        entries: ["Type", "Delay"],
        Type: {
          ids: ["L/C", "Transfer", "Check"],
          "L/C": { type: "checkbox", checked: false },
          Transfer: { type: "checkbox", checked: false },
          Check: { type: "checkbox", checked: false }
        },
        Delay: {
          ids: ["Days"],
          Days: { value: "", unit: " days", type: "numeric" }
        }
      },
      Invoicing: {
        imageSource: require("../assets/workers2.png"),
        entries: [
          "Down Payment",
          "Commissioning",
          "HandOver",
          "End Of Warranty"
        ],
        "Down Payment": {
          ids: ["Date M0+n", "%", "Amount"],
          "Date M0+n": { value: "", unit: "Dzd", type: "numeric" },
          "%": { value: "", unit: " %", type: "numeric" }
        },
        Commissioning: {
          ids: ["Date M0+n", "%", "Amount"],
          "Date M0+n": { value: "", unit: "Dzd", type: "numeric" },
          "%": { value: "", unit: " %", type: "numeric" },
          Amount: { value: "", unit: "  Dzd", type: "numeric" }
        },
        HandOver: {
          ids: ["Date M0+n", "%", "Amount"],
          "Date M0+n": { value: "", unit: "Dzd", type: "numeric" },
          "%": { value: "", unit: " %", type: "numeric" },
          Amount: { value: "", unit: "  Dzd", type: "numeric" }
        },
        "End Of Warranty": {
          ids: ["Date M0+n", "%", "Amount"],
          "Date M0+n": { value: "", unit: "Dzd", type: "numeric" },
          "%": { value: "", unit: " %", type: "numeric" },
          Amount: { value: "", unit: "  Dzd", type: "numeric" }
        }
      },
      "Financial Fees": {
        imageSource: require("../assets/workers2.png"),
        entries: ["On bid bond", "On Letter Of Credit", "On performance Bond"],
        "On Bid Bond": {
          ids: ["%", "Amount"],
          "%": { value: "", unit: " %", type: "numeric" },
          Amount: { value: "", unit: "  Dzd", type: "numeric" }
        },
        "On Letter Of Credit": {
          ids: ["%", "Amount"],
          "%": { value: "", unit: " %", type: "numeric" },
          Amount: { value: "", unit: "  Dzd", type: "numeric" }
        },
        "On performance Bond": {
          ids: ["%", "Amount"],
          "%": { value: "", unit: " %", type: "numeric" },
          Amount: { value: "", unit: "  Dzd", type: "numeric" }
        }
      }
      /* Subcontrating:{
        imageSource: require('../assets/workers2.png'),
        subtitle: 'And Services',
        entries: ['None For The Momement'],
        'None For The Momement':{
        }
      } */
    },
    "Fees On Supplier": {
      imageSource: require("../assets/sectionB.png"),
      subtitle: "Conditions of Payement",
      sections: ["Risks"],
      Risks: {
        imageSource: require("../assets/workers2.png"),
        subtitle: "To be coverred on currency rates",
        entries: ["Supplier 1", "supplier 2", "civil Works", "Others"],
        "Supplier 1": {
          ids: ["Amount", "Currency", "Rates"]
        }
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
    },
    Structure: {
      subtitle: "of Selling Prices",
      sections: ["-"],
      "-": {
        imageSource: require("../assets/cost.png"),
        subtitle: "",
        entries: [
          "Proposed Selling Price",
          "Margin For Negotiation",
          "SELLING PRICE",
          "Marketing Fees",
          "Provision (Total C)",
          "Cost (Total A)",
          "financial Fees (B+D)",
          "Gross margin",
          "Overheads",
          "Financing of Working Capital",
          "NET MARGIN"
        ],
        "Proposed Selling Price": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "Margin For Negotiation": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "SELLING PRICE": {
          chipEnabled: "true",
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": {
            value: "0",
            unit: " %",
            type: "numeric",
            icon: "info"
          },
          "Value (Dzd)": {
            value: "0",
            unit: " Dzd",
            type: "numeric",
            icon: "attach-money"
          }
        },
        "Marketing Fees": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "Provision (Total C)": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "Cost (Total A)": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "financial Fees (B+D)": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "Gross margin": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        Overheads: {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "Financing of Working Capital": {
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": { value: "", unit: " %", type: "numeric" },
          "Value (Dzd)": { value: "", unit: " Dzd", type: "numeric" }
        },
        "NET MARGIN": {
          chipEnabled: "true",
          ids: ["Percentage %", "Value (Dzd)"],
          "Percentage %": {
            value: "0",
            unit: " %",
            type: "numeric",
            icon: "info"
          },
          "Value (Dzd)": {
            value: "0",
            unit: " Dzd",
            type: "numeric",
            icon: "attach-money"
          }
        }
      }
    }
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initState,
  composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
