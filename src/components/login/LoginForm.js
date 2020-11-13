import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { loginAuth } from "../../store/actions/loginActions";

import { authTokenFun } from "../../store/actions/loginActions";

import { userInfo } from "./loginService";

const LoginForm = (props) => {
  const [loginCredentials, setLoginCredentials] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);

  useEffect(() => {
    if (loginCredentials !== null) {
      dispatch(loginAuth(loginCredentials));
    }
  }, [loginCredentials, dispatch]);

  useEffect(() => {
    const value = userInfo(data, loginCredentials);
    if (value === "success") {
      dispatch(authTokenFun(true));
      props.history.push("/search");
    }

    setUserCount(value);
  }, [data, dispatch]);

  const onFinish = (values) => {
    setLoginCredentials(values);
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      {userCount && (
        <Alert
          message={userCount}
          type="error"
          style={{ marginBottom: "10px" }}
          showIcon
        />
      )}
      <Form
        name="normal_login"
        className="login-form"
        size="large"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Username is required!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Password is required!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(LoginForm);
