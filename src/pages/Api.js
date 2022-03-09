import axios from "axios";
import { useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const config = {
      method: "get",
      url: "https://www.boredapi.com/api/activity",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <MainNavigation />
      <div>{data.activity}</div>
      <div>{data.type}</div>
      <div>{data.participants}</div>
      <div>{data.price}</div>
      <div>{data.link}</div>
      <div>{data.key}</div>
    </div>
  );
}

export default Api;
