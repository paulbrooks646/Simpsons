import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";

import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";
import "./Auth.scss";

const Auth = (props) => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [forgotDialogIsOpen, setForgotDialogIsOpen] = useState(false);

  const switchAuthType = (event) => {
    event.preventDefault();
    setIsLoggingIn(!isLoggingIn);
  };

  return (
    <>
      <div className="auth-main">
        <Typography variant="h2" align="center" className="auth-title">
          The Android<span className="sans-serif">'</span>s Dungeon
        </Typography>
        <Typography variant="h4" align="center" className="auth-subtitle">
          A Simpsons Fan Page
        </Typography>
        <div className={isLoggingIn ? "login-card" : "register-card"}>
          <Card variant="outlined" className="auth-card">
            <Typography variant="h4">
              {isLoggingIn ? "Login" : "Register"}
            </Typography>
            {isLoggingIn ? (
              <Login setForgotDialogIsOpen={setForgotDialogIsOpen} />
            ) : (
              <Register />
            )}
            <Typography variant="h6">
              {isLoggingIn ? "No account? " : "Already have an account? "}
              <Link href="#" onClick={switchAuthType}>
                {isLoggingIn ? "Register Here" : "Login Here"}
              </Link>
            </Typography>
          </Card>
        </div>
      </div>
      <Forgot
        open={forgotDialogIsOpen}
        setForgotDialogIsOpen={setForgotDialogIsOpen}
      />
    </>
  );
};

export default Auth;
