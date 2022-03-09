import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function mainNavigation() {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link className={classes.links} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classes.links} to="/api">
            API
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default mainNavigation;
