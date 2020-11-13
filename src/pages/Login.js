import React, { useEffect } from "react";
import "./login.css";
import { Card, Row, Col } from "antd";
import LoginForm from "../components/login/LoginForm";
import { useSelector } from "react-redux";

const Login = (props) => {
  const data = useSelector((state) => state.login);

  return (
    <div>
      <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
        <Col span={8}>
          <Card
            bordered={false}
            title="Login"
            className="login-card"
            headStyle={{
              fontSize: "21px",
              color: "#1890FF",
            }}
          >
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
