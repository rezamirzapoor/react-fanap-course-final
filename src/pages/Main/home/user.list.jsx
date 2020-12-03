import React from "react";
import { DataTable } from "components";
import { useDataFetch } from "hooks";
import { useEntriesParamsUpdater } from "./entry.context";

export default function UserList() {
  const {
    data: [users],
  } = useDataFetch(["/api/users"]);
  const { fetchByUser } = useEntriesParamsUpdater();
  const onSelect = (ev) => fetchByUser(ev.target.value);

  return (
    <DataTable
      title="کاربران"
      tableHead={["شناسه", "نام", "نام کاربری"]}
      tableBody={
        Array.isArray(users) &&
        users.map((user) => [user.id, user.name, user.userName])
      }
      pathname="/users"
      onSelect={onSelect}
    />
  );
}
