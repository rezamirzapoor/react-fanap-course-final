import { useState, useEffect } from "react";
import { http } from "services";
import { useToast } from ".";
export default function useDataFetch2(paths) {
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(paths)]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { openToast } = useToast();
  const fetchData = () => {
    setLoading(true);
    Promise.all(paths.map((path) => http.get(path)))
      .then((values) => {
        setData(values.map((value) => value.data));
      })
      .catch((error) => {
        setError(error.toString());
        openToast(error.toString(), "error");
      })
      .finally(() => setLoading(false));
  };
  return {
    data,
    error,
    loading,
  };
}
