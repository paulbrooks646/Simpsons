import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarComponent = (props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: props.vertical,
        horizontal: props.horizontal,
      }}
      open={props.open}
      autoHideDuration={5000}
      onClose={props.onClose}
      message={props.message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={props.onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SnackbarComponent;
