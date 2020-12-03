import React from "react";
import CategoryList from "./category.list";
import UserList from "./user.list";
import EntriesList from "./entries.list";
import { Grid } from "@material-ui/core";
import Calendar from "./Calendar";
import { EntryProvider } from "./entry.context";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
      <EntryProvider>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <UserList />
          </Grid>
          <Grid item sm={3} xs={12}>
            <CategoryList />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Calendar />
          </Grid>
          <Grid item sm={12} xs={12}>
            <EntriesList />
          </Grid>
        </Grid>
      </EntryProvider>
    </>
  );
}
