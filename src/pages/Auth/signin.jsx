import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDataFetch, useAuth } from "hooks";
import { Page } from "components";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Signin() {
  const { getValues, register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const {
    data: [randomUser],
    loading,
  } = useDataFetch(["/api/users/1"]);
  const { login } = useAuth();
  const onSubmit = () => login(getValues());
  return (
    <Page title="ورود" loading={loading}>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          variant="outlined"
          margin="normal"
          error={errors.userName}
          fullWidth
          label="نام کاربری"
          name="userName"
          autoComplete="userName"
          autoFocus
          inputRef={register({ required: "نام کاربری باید وارد شود" })}
          helperText={errors.userName?.message}
        />
        <span>{randomUser?.userName}</span>
        <TextField
          variant="outlined"
          margin="normal"
          error={errors.password}
          fullWidth
          name="password"
          label="رمز عبور"
          type="password"
          helperText={errors.password?.message}
          inputRef={register({
            required: "رمز عبور باید وارد شود",
            minLength: {
              value: 6,
              message: "طول رمز عبور حداقل ۶ کاراکتر است",
            },
          })}
        />
        <span>123456</span>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          ورود
        </Button>
        <Grid container>
          <Grid item>
            <Link className={classes.link} to="/authentication/signup">
              {"ایجاد حساب جدید"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Page>
  );
}
