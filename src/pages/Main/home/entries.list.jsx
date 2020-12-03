import React from "react";
import { DataTable } from "components";
import { useEntries } from "./entry.context";
import moment from "moment-jalaali";
export default function EntriesList() {
  const entries = useEntries();
  return (
    <DataTable
      title="هزینه ها"
      tableHead={["شناسه", "عنوان", "تاریخ", "مقدار", "دسته"]}
      tableBody={
        Array.isArray(entries) &&
        entries.map((entry) => [
          entry.id,
          entry.title,
          moment(entry.date).format("jYYYY/jM/jD "),
          entry.amount,
          entry.category?.name,
        ])
      }
      pathname="/entries"
    />
  );
}
