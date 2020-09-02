import React, { useState } from "react";
import "./Auth.scss";
import axios from 'axios'
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

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [account, setAccount] = useState(true);

  function toggleAccount() {
    setAccount(!account);
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log("logging in");
  }

  function handleRegister(event) {
      
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
    //   setPasswordsMatch(true);
      axios.post('/register', {newUsername, email, newPassword})
      .then( res => {
        console.log(res.data)
      })
      .catch( err => {

        (alert(err.response.data))})
    }
  }
  return (
    <div className="auth-main">
      <Typography variant="h2" align="center" className="auth-title">
        The Android's Dungeon
      </Typography>
      <Typography variant="h4" align="center">
        A Simpsons Fan Page
      </Typography>
      <div className={`${account ? "login-card" : "login-card-closed"}`}>
        <Card variant="outlined" className="auth-card">
          <Typography variant="h5">Login</Typography>
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
              Login
            </Button>
          </form>
          <Typography variant="h6" onClick={toggleAccount}>
            No account? Register Here
          </Typography>
        </Card>
      </div>
      <div className={`${account ? "register-card-closed" : "register-card"}`}>
        <Card variant="outlined" className="auth-card">
          <Typography variant="h5">Register</Typography>
          <form onSubmit={handleRegister} className='register-form'>
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
            type='email'
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
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
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
          Register
        </Button>
      </form>
          <Typography variant="h6" onClick={toggleAccount}>
            Already have an account? Login Here
          </Typography>
        </Card>
      </div>
    </div>
  );
}
