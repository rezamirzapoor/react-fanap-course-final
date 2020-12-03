import http from "axios";

http.defaults.headers.common["Accept"] = "application/json";
http.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) config.headers["token"] = token;
  return config;
});

export default http;
