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
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
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

  // eslint-disable-next-line
  const handleForgotPasswordDialogOpen = () => {
    setDialogIsOpen(true);
  };

  const handleForgotPasswordDialogClose = () => {
    setDialogIsOpen(false);
    setForgotPasswordEmail("");
  };

  const handlePasswordResetRequest = () => {
    // * Temporary email check
    if (forgotPasswordEmail.length) {
      handleSnackbarOpen(
        "info",
        "Password reset link sent. Please check your email"
      );
    } else {
      handleSnackbarOpen(
        "error",
        "No user with that email exists. Please try again."
      );
    }
    handleForgotPasswordDialogClose();
  };

  return (
    <>
      <Dialog
        open={dialogIsOpen}
        onClose={handleForgotPasswordDialogClose}
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
          <Button onClick={handleForgotPasswordDialogClose} color="secondary">
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
