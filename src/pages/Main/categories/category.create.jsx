import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useSubmitForm } from "hooks";
import { Page, BackLink } from "components";
function CategoryCreate() {
  const { errors, handleSubmit, register, getValues } = useForm();
  const { submitForm } = useSubmitForm("/api/categories");
  const onSubmit = () => submitForm({ category: getValues() });

  return (
    <Page title="ایجاد دسته بندی">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="نام"
              error={errors.name}
              name="name"
              fullWidth
              variant="outlined"
              inputRef={register({ required: "این فیلد باید پر شود" })}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              ارسال
            </Button>
            <BackLink to="/">بازگشت</BackLink>
          </Grid>
        </Grid>
      </form>
    </Page>
  );
}
export default CategoryCreate;
