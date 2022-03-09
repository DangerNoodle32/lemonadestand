export const INCREASE = "INCREASE";
export const STOCK = "STOCK";

export const INCREASE_FAIL = "INCREASE_FAIL";
export const STOCK_FAIL = "STOCK_FAIL";

export const Purchase = (lemonade, revenue) => async (dispatch) => {
  try {
    var data = {
      lemonade: lemonade - 1,
      revenue: revenue + 3,
    };
    dispatch({
      type: "INCREASE",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "INCREASE_FAIL",
    });
  }
};

export const Stock = (lemonade, revenue) => async (dispatch) => {
  try {
    var data = {
      lemonade: lemonade + 1,
      revenue: revenue - 1,
    };
    dispatch({
      type: "STOCK",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "STOCK_FAIL",
    });
  }
};
