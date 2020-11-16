import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import "./search.css";
import ContentSearch from "../components/search/ContentSearch";
import Header from "../components/header/Header";
const { Content } = Layout;
const Search = (props) => {
  const data = useSelector((state) => state.login);
  useEffect(() => {
    if (data.authToken === false) {
      props.history.push("/");
    }
  }, [data.authToken])

  return (
    <div>
      <Header />
      <Content className="content-main">
        <ContentSearch />
      </Content>
    </div>
  );
};

export default Search;
