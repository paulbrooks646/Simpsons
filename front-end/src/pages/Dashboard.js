import React from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Dashboard() {
  const logout = () => {
    console.log("Logout");
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
