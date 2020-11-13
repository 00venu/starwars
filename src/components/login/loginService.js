export const userInfo = (data, loginDetails) => {
  if (data.count === 0) {
    return "User is not exist!";
  } else if (data.count === 1) {
    let name = data.userData[0].name;
    name = name.toLowerCase();
    let loginname = data.loginDetails.username.toLowerCase();
    if (loginname === name) {
      if (data.userData[0].birth_year === data.loginDetails.password) {
        return "success";
      } else {
        return "Incorrect Password";
      }
    } else {
      return "User name must be full name";
    }
  } else if (data.count > 1) {
    return `${data.count} users with same name!`;
  }
};
