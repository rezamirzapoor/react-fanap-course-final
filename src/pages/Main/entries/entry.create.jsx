import React from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useSubmitForm, useDataFetch } from "hooks";
import { Page, BackLink } from "components";
export default function EntryCreate() {
  const { errors, handleSubmit, register, getValues, control } = useForm();
  const {
    data: [categories, users],
    loading,
  } = useDataFetch(["/api/categories", "/api/users"]);
  const { submitForm } = useSubmitForm("/api/entries");
  const onSubmit = () => submitForm({ entry: getValues() });
  return (
    <Page title="ایجاد هرینه" loading={loading}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="عنوان"
              error={errors.title}
              name="title"
              fullWidth
              variant="outlined"
              inputRef={register({ required: "این فیلد باید پر شود" })}
              helperText={errors.title?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="مقدار"
              error={errors.amount}
              name="amount"
              fullWidth
              variant="outlined"
              inputRef={register({ required: "این فیلد باید پر شود" })}
              helperText={errors.amount?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>دسته بتدی ها</InputLabel>
              <Controller
                control={control}
                name="categoryId"
                as={
                  <Select label="دسته ها">
                    {Array.isArray(categories) &&
                      categories.map((c) => (
                        <MenuItem key={c.id} value={c.id}>
                          {c.name}
                        </MenuItem>
                      ))}
                  </Select>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>کاربران</InputLabel>
              <Controller
                control={control}
                name="userId"
                as={
                  <Select label="کاربران">
                    {Array.isArray(users) &&
                      users.map((u) => (
                        <MenuItem key={u.id} value={u.id}>
                          {u.name}
                        </MenuItem>
                      ))}
                  </Select>
                }
              />
            </FormControl>
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
