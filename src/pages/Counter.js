import { Purchase, Stock } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MainNavigation from "../components/MainNavigation";

import classes from "./Counter.module.css";

function Counter() {
  const [lemonadeEmpty, setLemonadeEmpty] = useState("");
  const [revenueEmpty, setRevenueEmpty] = useState("");
  const dispatch = useDispatch();
  const response = useSelector((state) => state.purchaseResponse);

  const minus = () => {
    if (response.lemonade < 1) {
      setLemonadeEmpty("No more lemonades!");
    } else {
      setRevenueEmpty("");
      dispatch(Purchase(response.lemonade, response.revenue));
    }
  };

  const plus = () => {
    if (response.revenue < 1) {
      setRevenueEmpty("You are out of money!");
    } else {
      setLemonadeEmpty("");
      dispatch(Stock(response.lemonade, response.revenue));
    }
  };

  return (
    <div id="main">
      <MainNavigation />
      <img
        className={classes.image}
        src="https://www.nydailynews.com/resizer/TJfJlmZwF1YuSCM5dnVKq3UnE4o=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/6BKXZOJOCMZGWC6FFGOBOASG6Q.jpg"
      ></img>

      <div className={classes.container}>
        <div className={classes.lemonade}>
          <h2>Stock</h2>
          <p>
            <span id="stock">{response.lemonade}</span> lemonades left
          </p>

          <p>{lemonadeEmpty}</p>

          <button className="ui button yellow" onClick={minus}>
            Buy Lemonade
          </button>
        </div>

        <div className={classes.stock}>
          <h2>Revenue</h2>
          <p>
            <span id="revenue">{response.revenue}</span>$ today
          </p>

          <p>{revenueEmpty}</p>

          <button className="ui button teal" onClick={plus}>
            Increase Stock
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
