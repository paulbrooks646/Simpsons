import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routes from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#45aaf2",
      dark: " #4b7bec",
    },
    secondary: {
      main: "#fc5c65",
      dark: "#eb3b5a",
    },
  },
});

const App = () => <MuiThemeProvider theme={theme}>{Routes}</MuiThemeProvider>;

export default App;
