import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";

import { loginUser, registerUser } from "../../redux/userReducer";
import Clouds from "../../images/clouds.jpg";
import "./Auth.scss";

function Auth(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [account, setAccount] = useState(true);

  function toggleAccount(event) {
    event.preventDefault();
    setAccount(!account);
  }

  function handleLogin(event) {
    event.preventDefault();
    axios
      .post("/login", { username, password })
      .then((res) => {
        props.loginUser(res.data);
        props.history.push("/Dashboard");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  function handleRegister(event) {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      //   setPasswordsMatch(true);
      axios
        .post("/register", { newUsername, email, newPassword })
        .then((res) => {
          props.registerUser(res.data);
          props.history.push("/Dashboard");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  }
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${Clouds})` }}>
      <Typography variant="h2" align="center" className="auth-title">
        The Android<span style={{ fontFamily: "sans-serif" }}>'</span>s Dungeon
      </Typography>
      <Typography variant="h4" align="center" className="auth-subtitle">
        A Simpsons Fan Page
      </Typography>
      <div className={`${account ? "login-card" : "login-card-closed"}`}>
        <Card variant="outlined" className="auth-card">
          <Typography variant="h4">Login</Typography>
          <form onSubmit={handleLogin} className="login-form">
            <FormControl>
              <InputLabel htmlFor="username">Username or Email</InputLabel>
              <Input
                required
                value={username}
                id="username"
                placeholder="Enter username or email"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                required
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
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
          <Typography variant="h6">
            No account?{" "}
            <Link href="#" onClick={toggleAccount}>
              Register Here
            </Link>
          </Typography>
        </Card>
      </div>
      <div className={`${account ? "register-card-closed" : "register-card"}`}>
        <Card variant="outlined" className="auth-card">
          <Typography variant="h4">Register</Typography>
          <form onSubmit={handleRegister} className="register-form">
            <FormControl>
              <InputLabel htmlFor="newUsername">Username</InputLabel>
              <Input
                required
                value={newUsername}
                id="newUsername"
                placeholder="Enter username"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                type="email"
                required
                value={email}
                id="email"
                placeholder="Enter email"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl error={!passwordsMatch}>
              <InputLabel htmlFor="newPassword">Password</InputLabel>
              <Input
                required
                value={newPassword}
                aria-describedby="new-password-helper-text"
                id="newPassword"
                placeholder="Enter password"
                error={!passwordsMatch}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
              />
              {!passwordsMatch && (
                <FormHelperText id="new-password-helper-text">
                  Passwords Do Not Match
                </FormHelperText>
              )}
            </FormControl>
            <FormControl error={!passwordsMatch}>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                required
                value={confirmPassword}
                aria-describedby="confirm-password-helper-text"
                id="confirm"
                placeholder="Confirm password"
                error={!passwordsMatch}
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
              {!passwordsMatch && (
                <FormHelperText id="confirm-password-helper-text">
                  Passwords Do Not Match
                </FormHelperText>
              )}
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
          <Typography variant="h6" className="register-text">
            Already have an account?{" "}
            <Link href="#" onClick={toggleAccount}>
              Login Here
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = { loginUser, registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
