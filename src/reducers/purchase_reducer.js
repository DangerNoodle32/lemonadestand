import { INCREASE, STOCK, INCREASE_FAIL, STOCK_FAIL } from "../actions/actions";

const DefaultState = {
  lemonade: 50,
  revenue: 0,
  errorMsg: "",
};

const PurchaseReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        lemonade: action.payload.lemonade,
        revenue: action.payload.revenue,
        errorMsg: "",
      };
    case STOCK:
      return {
        ...state,
        lemonade: action.payload.lemonade,
        revenue: action.payload.revenue,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default PurchaseReducer;
