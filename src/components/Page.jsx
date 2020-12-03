import React from "react";
import { Typography } from "@material-ui/core";
import { Loading, Error } from ".";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Page({ title, loading, error, children }) {
  const classes = useStyle();
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Typography className={classes.title} component="h1" variant="h6">
        {title}
      </Typography>
      {children}
    </>
  );
}
