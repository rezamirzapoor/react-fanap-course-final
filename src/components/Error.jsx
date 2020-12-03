import React from "react";

export default function Error({ message }) {
  return <h1>{message ? message : "مشکلی وجود دارد"}</h1>;
}
