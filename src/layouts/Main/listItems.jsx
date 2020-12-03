import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { mainRoutes as routes } from "routes";
const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
}));
export default function Menu() {
  const classes = useStyle();
  return (
    <List>
      {routes
        .filter((route) => route.show)
        .map((item, index) => (
          <Link className={classes.link} to={item.path} key={index}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
    </List>
  );
}
