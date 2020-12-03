import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "hooks";
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

export default function Signup() {
  const classes = useStyles();
  const { signup } = useAuth();
  const { register, getValues, handleSubmit, errors } = useForm();
  const onSubmit = () => signup(getValues());
  return (
    <Page title="ثبت نام">
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={errors.name}
          autoComplete="name"
          name="name"
          variant="outlined"
          fullWidth
          id="name"
          label="نام"
          autoFocus
          inputRef={register({ required: "نام باید وارد شود" })}
          helperText={errors.name?.message}
        />
        <TextField
          variant="outlined"
          margin="normal"
          error={errors.userName}
          fullWidth
          id="userName"
          label="نام کاربری"
          name="userName"
          inputRef={register({ required: "نام باید وارد شود" })}
          helperText={errors.userName?.message}
        />
        <TextField
          variant="outlined"
          margin="normal"
          error={errors.password}
          fullWidth
          name="password"
          label="رمز عبور"
          type="password"
          autoComplete="current-password"
          inputRef={register({ required: "رمز عبور باید وارد شود" })}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          ثبت نام
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/authentication/signin" className={classes.link}>
              در حال حاضر حساب کاربری دارید؟ اینجا کلیک کنید
            </Link>
          </Grid>
        </Grid>
      </form>
    </Page>
  );
}
