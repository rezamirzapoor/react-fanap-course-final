import React from "react";
import { Route, Switch } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";
import AppBar from "./AppBar";

import { mainRoutes as routes } from "routes";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid className={classes.container}>
          <Switch>
            {routes.map((route, i) => (
              <Route {...route} key={i} />
            ))}
          </Switch>
        </Grid>
      </main>
    </div>
  );
}
