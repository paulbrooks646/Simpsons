import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import { loginUser } from "../../redux/userReducer";

const Login = (props) => {
  const [userIdentifier, setUserIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loginHasErrors, setLoginHasErrors] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("/login", { userIdentifier, password })
      .then((res) => {
        props.loginUser(res.data);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        setLoginHasErrors(true);
        setLoginErrorMessage(err.response.data);
      });
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <FormControl>
        <InputLabel htmlFor="userIdentifier">Username or Email</InputLabel>
        <Input
          required
          error={loginHasErrors}
          value={userIdentifier}
          id="userIdentifier"
          placeholder="Enter username or email"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(e) => setUserIdentifier(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          required
          error={loginHasErrors}
          value={password}
          placeholder="Enter password"
          id="password"
          startAdornment={
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          }
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {loginHasErrors && (
          <FormHelperText error>{loginErrorMessage}</FormHelperText>
        )}
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      <Button
        type="button"
        size="small"
        color="secondary"
        className="forgot-password-btn"
        onClick={() => props.setForgotDialogIsOpen(true)}
      >
        Forgot Password?
      </Button>
    </form>
  );
};

const mapStateToProps = (reduxState) => reduxState;
const mapDispatchToProps = { loginUser };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
