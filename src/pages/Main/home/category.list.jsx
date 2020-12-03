import React from "react";
import { DataTable } from "components";
import { useDataFetch } from "hooks";
import { useEntriesParamsUpdater } from "./entry.context";

export default function CategoryList() {
  const {
    data: [categories],
  } = useDataFetch(["/api/categories"]);
  const { fetchByCategory } = useEntriesParamsUpdater();
  const onSelect = (ev) => fetchByCategory(ev.target.value);
  return (
    <DataTable
      title="دسته بندی"
      tableHead={["شناسه", "عنوان"]}
      tableBody={
        Array.isArray(categories) && categories.map((c) => [c.id, c.name])
      }
      pathname="/categories"
      onSelect={onSelect}
    />
  );
}
