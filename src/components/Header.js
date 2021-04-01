import axios from "axios";
import React, { useEffect, useState } from "react";
import logoBiru from '../assets/bluelogo copy.png';
//import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Button, Menu, MenuItem } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

import MenuList from './Menu';
//import Chart from './Chart';
//import Deposits from './Deposits';
//import Orders from './Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://chatat.id">
        Chatat.id
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
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
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Header = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    role_id: "",
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("user");
      setUser(data);
      localStorage.setItem("id", data.id);
      localStorage.setItem("user_name", data.name);
      localStorage.setItem("role_id", data.role_id);
      localStorage.setItem("role_name", data.role.name);
    })();
  }, []);

  const Logout = async () => {
    await axios.post("logout", {});
  };

  



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
            <MenuIcon />
            
          </IconButton>
          
          <Typography
            component="h1"
            variant="h6"  
            color="inherit"
            noWrap
            className={classes.title}
          >
            Customer Success Management
          </Typography>
        

        
              <div><Button variant="contained" onClick={handleClick}>{user.name}</Button></div>
          
        
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
     
            <MenuItem onClick={handleClose}>
              <Link href="/login" onClick={Logout} color="inherit">Logout </Link>
            </MenuItem>
          </Menu>
          
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
        <img src={logoBiru} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
            
          </IconButton>
        </div>
        <Divider />
        <List><MenuList/></List>
       
        
      </Drawer>
      </>

 
    // <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    //   <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="google.com">
    //     Chatat.id
    //   </a>

    //   <ul className="my-2 my-md-0 mr-md-3">
    //     <Link to="/profile" className="p-2 text-white text-decoration-none" >
    //       {user.name}
    //     </Link>
    //     <Link to="/login" className="p-2 text-white text-decoration-none" onClick={Logout} >
    //       Sign out
    //     </Link>
    //   </ul>
    // </header>
  );
};
export default Header;
