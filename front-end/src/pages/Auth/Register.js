import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import FormHelperText from "@material-ui/core/FormHelperText";

import { registerUser } from "../../redux/userReducer";

const Register = (props) => {
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleRegister = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      //   setPasswordsMatch(true);
      axios
        .post("/register", { newUsername, newEmail, newPassword })
        .then((res) => {
          props.registerUser(res.data);
          props.history.push("/Dashboard");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };

  return (
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
        <InputLabel htmlFor="newEmail">Email</InputLabel>
        <Input
          type="email"
          required
          value={newEmail}
          id="newEmail"
          placeholder="Enter email"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
          onChange={(e) => setNewEmail(e.target.value)}
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
        Submit
      </Button>
    </form>
  );
};

const mapStateToProps = (reduxState) => reduxState;
const mapDispatchToProps = { registerUser };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
