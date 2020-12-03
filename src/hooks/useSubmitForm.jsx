import { useState } from "react";
import { http } from "services";
import { useToast } from "hooks";

export default function useSubmitForm(path, method = "post") {
  const [submitLoading, setSubmitLoading] = useState(false);
  const { openToast } = useToast();
  const submitForm = (data) => {
    openToast("در حال انجام عملیات", "info");
    setSubmitLoading(true);
    http[method](path, data)
      .then((res) => openToast("با موفقیت انجام شد"))
      .catch((error) => openToast(error.toString(), "error"))
      .finally(() => setSubmitLoading(false));
  };
  return { submitLoading, submitForm };
}
