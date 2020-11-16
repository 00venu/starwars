import React from "react";
import "./login.css";
import { Card, Row, Col } from "antd";
import LoginForm from "../components/login/LoginForm";
const Login = (props) => {
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
