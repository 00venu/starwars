import { LOGIN_AUTH, AUTH_TOKEN, LOGOUT } from "../actions/loginActions";
const initialState = {
  count: null,
  userData: [],
  authToken: false,
  loginDetails: {},
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH:
      return {
        ...state,
        count: action.count,
        userData: action.userData,
        loginDetails: action.loginDetails,
      };
    case AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken,
      };
    case LOGOUT:
      return {
        ...state,
        count: null,
        userData: [],
        authToken: false,
        loginDetails: {},
      };
    default:
      return state;
  }
};

export default LoginReducer;
