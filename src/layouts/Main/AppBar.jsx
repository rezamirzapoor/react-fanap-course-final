import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  ButtonGroup,
  Button,
} from "@material-ui/core";

import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import MenuList from "./listItems";
import {
  Menu as MenuIcon,
  PowerSettingsNew as PowerOffIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "hooks";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    background: "#f5f5f5",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuIcon: {
    color: "black",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

export default function Appbar() {
  const [open, setOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            size="small"
          >
            <Button>{user.name}</Button>
            <Button onClick={logout}>
              <PowerOffIcon />
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList />
        <Divider />
      </Drawer>
    </>
  );
}
