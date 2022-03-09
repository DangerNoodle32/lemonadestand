import { combineReducers } from "redux";
import PurchaseReducer from "./purchase_reducer";

const rootReducer = combineReducers({
  purchaseResponse: PurchaseReducer,
});

export default rootReducer;
