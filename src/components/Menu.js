import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TuneIcon from '@material-ui/icons/Tune';
import PeopleIcon from "@material-ui/icons/People";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import StorageIcon from '@material-ui/icons/Storage';
import { Link } from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import TimelineIcon from "@material-ui/icons/Timeline";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DevicesIcon from '@material-ui/icons/Devices';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MenuList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const hiddenMenu = ()=>{
    if (localStorage.getItem("role_id") == 3) {
      return false
    }
    return true
  }

  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <Link href="/">
            {" "}
            <DashboardIcon />
          </Link>
        </ListItemIcon>
        <Link href="/">
          {" "}
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>

      

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ContactPhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants1">
              <ListItemText primary="Data Leads" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants2">
              <ListItemText primary="Sign Up" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants3">
              <ListItemText primary="Demo" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants4">
              <ListItemText primary="Follow Up" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants5">
              <ListItemText primary="Sign Up Curn" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants6">
              <ListItemText primary="Subscribe" />
            </Link>
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick4}>
        <ListItemIcon>
          <DevicesIcon />
        </ListItemIcon>
        <ListItemText primary="Experience" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/demo1">
              <ListItemText primary="Demo" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/demo2">
              <ListItemText primary="Sudah Demo" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/demo3">
              <ListItemText primary="Ghosting" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/demo4">
              <ListItemText primary="Reschedule" />
            </Link>
          </ListItem>
        </List>
        
      </Collapse>
      
     


      <br />
      <Divider />
      <br />





<div hidden={hiddenMenu()}>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Data" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/users">
              <ListItemText primary="Users" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Merchants" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/marketingcycle">
              <ListItemText primary="Sales Call" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/demo">
              <ListItemText primary="Demo" />
            </Link>
          </ListItem>
        </List>
        {/* <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Media Demo" />
            </Link>
          </ListItem>
        </List> */}
      </Collapse>



      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <TuneIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/roles">
              <ListItemText primary="Roles" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Phone Status" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="WA Status" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Merchant Status" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Result Sales" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Media Demo" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Demo Result" />
            </Link>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <Link href="/merchants">
              <ListItemText primary="Source" />
            </Link>
          </ListItem>
        </List>
        
      </Collapse>
</div>
    
    
    
    </div>
  );
};

export default MenuList;
