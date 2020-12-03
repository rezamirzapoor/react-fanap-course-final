import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
}));

export default function Loading() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        color="secondary"
        size={50}
      />
    </div>
  );
}
