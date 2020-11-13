import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Search = (props) => {
  const data = useSelector((state) => state.login);
  console.log(data);
  useEffect(() => {
    if (data.authToken === false) {
      props.history.push("/");
    }
  }, []);

  return <div>Search</div>;
};

export default Search;
