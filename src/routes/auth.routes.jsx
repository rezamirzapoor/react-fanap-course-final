import { Signin, Signup } from "pages";

const authRoutes = [
  {
    path: "/authentication/signin",
    component: Signin,
  },
  {
    path: "/authentication/signup",
    component: Signup,
  },
];

export default authRoutes;
