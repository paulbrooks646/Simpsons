import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Forgot = (props) => {
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [snackbarAlertType, setSnackbarAlertType] = useState("info");
  const [snackbarAlertText, setSnackbarAlertText] = useState("");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const handleSnackbarOpen = (alertType, alertText) => {
    setSnackbarIsOpen(true);
    setSnackbarAlertType(alertType);
    setSnackbarAlertText(alertText);
  };

  const handleSnackbarClose = () => {
    setSnackbarIsOpen(false);
    setSnackbarAlertType("info");
    setSnackbarAlertText("");
  };

  const handleForgotDialogClose = () => {
    props.setForgotDialogIsOpen(false);
    setForgotPasswordEmail("");
  };

  // * Temporary email check
  const checkEmail = () => {
    return new Promise((resolve, reject) => {
      if (forgotPasswordEmail.length) {
        handleSnackbarOpen(
          "info",
          `A Password reset link has been sent to ${forgotPasswordEmail}`
        );
      } else {
        handleSnackbarOpen(
          "error",
          "No user with that email exists. Please try again."
        );
      }
      resolve();
    });
  };

  const handlePasswordResetRequest = async () => {
    await checkEmail();
    handleForgotDialogClose();
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleForgotDialogClose}
        disableBackdropClick={true}
        aria-labelledby="forgot-password-dialog"
      >
        <DialogTitle id="forgot-password-dialog">Forgot Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the email address associated with your account to receive a
            password reset link
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleForgotDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handlePasswordResetRequest} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarIsOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          variant="filled"
          severity={snackbarAlertType}
        >
          {snackbarAlertText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Forgot;
