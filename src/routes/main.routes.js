import {
  Home,
  CategoryCreate,
  CategoryEdit,
  UserCreate,
  UserEdit,
  EntryCreate,
  EntryEdit,
} from "pages";
import {
  Home as HomeIcon,
  Assignment as AssignmentIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
} from "@material-ui/icons";

const mainRoutes = [
  {
    path: "/categories/create",
    component: CategoryCreate,
    excat: true,
    show: true,
    title: "ایجاد دسته",
    icon: <AssignmentIcon />,
  },
  {
    path: "/categories/:id/edit",
    component: CategoryEdit,
  },
  {
    path: "/users/create",
    component: UserCreate,
    excat: true,
    show: true,
    title: "ایجاد کاربر",
    icon: <PeopleIcon />,
  },
  {
    path: "/users/:id/edit",
    component: UserEdit,
    excat: true,
  },

  {
    path: "/entries/create",
    component: EntryCreate,
    excat: true,
    show: true,
    title: "ایجاد هرینه",
    icon: <BarChartIcon />,
  },
  {
    path: "/entries/:id/edit",
    component: EntryEdit,
  },
  {
    path: "/",
    component: Home,
    excat: true,
    title: "خانه",
    show: true,
    icon: <HomeIcon />,
  },
];

export default mainRoutes;
