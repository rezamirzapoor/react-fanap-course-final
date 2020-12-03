import { useContext } from "react";
import { AuthContext, AuthSetContext } from "providers/AuthProvider";
import { useHistory } from "react-router";
import { http } from "services";
import { useToast } from "hooks";
export default function useAuth() {
  const { user } = useContext(AuthContext);
  const setAuth = useContext(AuthSetContext);
  const history = useHistory();
  const { openToast } = useToast();

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ user: null });
    history.push("/authentication/signin");
  };

  const login = (credentials) => {
    http
      .post("/auth/login", credentials)
      .then(({ data }) => {
        openToast("با موفقیت وارد شدید");
        localStorage.setItem("token", data.token);
        setAuth({ user: data.user });
        history.push("/");
      })
      .catch(() => openToast("اطلاعات شما نادرست است", "error"));
  };

  const signup = (credentials) => {
    http
      .post("/auth/register", credentials)
      .then(({ data }) => {
        openToast("ثبت نام شما با موفقیت انجام شد");
        localStorage.setItem("token", data.token);
        setAuth({ user: data.user });
        history.push("/");
      })
      .catch(() => openToast("مشکلی وجود دارد", "error"));
  };

  return { login, logout, signup, user };
}
