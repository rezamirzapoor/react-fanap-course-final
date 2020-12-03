import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useSubmitForm, useDataFetch } from "hooks";
import { useParams } from "react-router";
import { Page, BackLink } from "components";

function CategoryEdit() {
  const { id } = useParams();
  const {
    data: [category],
    loading,
  } = useDataFetch([`/api/categories/${id}`]);
  const { errors, handleSubmit, register, getValues } = useForm();
  const { submitForm } = useSubmitForm(`/api/categories/${id}`, "put");

  const onSubmit = () => submitForm({ category: getValues() });
  return (
    <Page title={`ویرایش دسته بندی ${id}`} loading={loading}>
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
              defaultValue={category?.name}
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
export default CategoryEdit;
