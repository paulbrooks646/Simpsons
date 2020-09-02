import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Dashboard() {
  const logout = () => {
    axios.delete("/logout").then(() => {
      props.history.push("/");
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<ExitToAppIcon />}
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
}
