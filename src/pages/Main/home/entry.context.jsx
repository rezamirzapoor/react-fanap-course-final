import { createContext, useState, useEffect, useContext } from "react";
import { http } from "services";
export const EntriesContext = createContext();
export const EntriesSetContext = createContext();

export function EntryProvider({ children }) {
  const [entries, setEntries] = useState({
    all: null,
    byDate: null,
    byCategory: null,
    byUser: null,
  });

  const [result, setResult] = useState([]);

  // in first that component mounted, we should fetch all entries
  useEffect(() => {
    http
      .get(`/api/entries`)
      .then((res) => setEntries((state) => ({ ...state, all: res.data })));
  }, []);

  // each time entries by params fetched, we should filter exist arrays and store it in result state
  useEffect(() => {
    const filterEntries = () => {
      let filledArrays = [...Object.values(entries)].filter((a) =>
        Array.isArray(a)
      );
      let arr = filledArrays.shift();
      filledArrays.forEach((array) => {
        arr = arr.filter((e) => array.find((el) => el.id === e.id));
      });
      setResult(arr);
    };
    filterEntries();
  }, [entries.all, entries.byUser, entries.byCategory, entries.byDate]);

  return (
    <EntriesContext.Provider value={result}>
      <EntriesSetContext.Provider value={setEntries}>
        {children}
      </EntriesSetContext.Provider>
    </EntriesContext.Provider>
  );
}

export const useEntries = () => useContext(EntriesContext);
export const useEntriesParamsUpdater = () => {
  const setEntries = useContext(EntriesSetContext);

  const fetchByParam = (path, type, param) => {
    if (param === "0") setEntries((state) => ({ ...state, [type]: null }));
    else
      http.get(path).then((res) =>
        setEntries((state) => ({
          ...state,
          [type]: Array.isArray(res.data.entries) ? res.data.entries : res.data,
        }))
      );
  };

  const fetchByCategory = (categoryId) =>
    fetchByParam(
      `/api/categories/${categoryId}/entries`,
      "byCategory",
      categoryId
    );
  const fetchByUser = (userId) =>
    fetchByParam(`/api/users/${userId}`, "byUser", userId);
  const fetchByDate = (date) =>
    fetchByParam(`/api/entries/${date}`, "byDate", date);

  return { fetchByCategory, fetchByUser, fetchByDate };
};
