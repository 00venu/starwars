import React from "react";
import { Layout } from "antd";
import "./header.css";
import { Button } from "antd";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/loginActions";
import { withRouter } from "react-router-dom";
const { Header } = Layout;

const HeaderComponent = (props) => {
  const data = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const logoutFun = () => {
    dispatch(logout());
    props.history.push("/");
  };
  return (
    <Layout>
      <Header className="header-main">
        <div className="main-logo" />
        <div className="block-right">
          <div className="icon-parent">
            <UserOutlined className="icon-user" />
          </div>
          <h3>{data.loginDetails.username}</h3>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            onClick={logoutFun}
          ></Button>
        </div>
      </Header>
    </Layout>
  );
};

export default withRouter(HeaderComponent);
