import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../components/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../components/Title";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import SubTitle from "../components/SubTitle";
import { Divider } from "@material-ui/core";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CardMedia from '@material-ui/core/CardMedia';
import welcome from '../assets/welcomeuser.png';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  media: {
    height: 600,
    display: "flex",
    alignItems: "center",
  
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
    height: 130,
  },
}));

const Dashboard = () => {

  const [total, setTotal] = useState("");
  const [total1, setTotal1] = useState("");
  const [total2, setTotal2] = useState("");
  const [total3, setTotal3] = useState("");
  const [total4, setTotal4] = useState("");
  const [total5, setTotal5] = useState("");
  const [total6, setTotal6] = useState("");
  const [totalD, setTotalD] = useState("");
  const [totalD1, setTotalD1] = useState("");
  const [totalD2, setTotalD2] = useState("");
  const [totalD3, setTotalD3] = useState("");
  const [totalD4, setTotalD4] = useState("");

  const loginName = localStorage.getItem("user_name");
  const loginId = Number(localStorage.getItem("id"));
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  useEffect(() => {
    (async () => {
      
      const { data } = await axios.get(`merchanttele/${loginId}`);
      setTotal(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchanttele1/${loginId}`);
      setTotal1(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchanttele2/${loginId}`);
      setTotal2(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchanttele3/${loginId}`);
      setTotal3(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchanttele4/${loginId}`);
      setTotal4(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchanttele5/${loginId}`);
      setTotal5(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchanttele6/${loginId}`);
      setTotal6(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantcxo/${loginId}`);
      setTotalD(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantcxo1/${loginId}`);
      setTotalD1(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantcxo2/${loginId}`);
      setTotalD2(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantcxo3/${loginId}`);
      setTotalD3(data.meta.total);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantcxo4/${loginId}`);
      setTotalD4(data.meta.total);
    })();
  }, []);







  const hiddenMenu2 = ()=>{
    if (localStorage.getItem("role_id") == 2) {
      return false
    }
    return true
  }
  const hiddenMenu1 = ()=>{
    if (localStorage.getItem("role_id") == 1) {
      return false
    }
    return true
  }
  const hiddenMenu4 = ()=>{
    if (localStorage.getItem("role_id") == 4) {
      return false
    }
    return true
  }
  return (
    <Wrapper>
        <Title>Hai {loginName} selamat datang di Chatat Customer Success Management !</Title>
        <br/>
        <Divider/>
        <br/>
        <div hidden={hiddenMenu4()}>
          <div className="container" align="center">
            <div>
        <img
          
          src={welcome}
          title="Welcome user!!!"
        />
        </div>
        <div className="mt-5">
        <SubTitle>Silahkan hubungi Ado atau Dimas untuk mendapatkan izin akses fitur system ini, terimakasih </SubTitle>
        </div>
 
        </div>
        </div>
        <div hidden={hiddenMenu2()}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Link href="/merchants1" >
          <Paper className={fixedHeightPaper}>
            <Title>Data Leads</Title>
            <Typography component="p" variant="h4">
              {total1}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
        <Link href="/merchants2" >
          <Paper className={fixedHeightPaper}>
            <Title>Sign Up / Free Trial</Title>
            <Typography component="p" variant="h4">
              {total2}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
        <Link href="/merchants3" >
          <Paper className={fixedHeightPaper}>
            <Title>Janji Demo</Title>
            <Typography component="p" variant="h4">
              {total3}
            </Typography>
          </Paper>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Link href="/merchants4" >
          <Paper className={fixedHeightPaper}>
            <Title>Needs Follow Up</Title>
            <Typography component="p" variant="h4">
              {total4}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
        <Link href="/merchants5" >
          <Paper className={fixedHeightPaper} >
            <Title>Curn</Title>
            <Typography component="p" variant="h4">
              {total5}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
        <Link href="/merchants6" >
          <Paper className={fixedHeightPaper}>
            <Title>Subscribe</Title>
            <Typography component="p" variant="h4">
              {total6}
            </Typography>
          </Paper>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Title>Total Merchant</Title>
               <Typography component="p" variant="h4">
              {total}
            </Typography>
          
          </Paper>
        </Grid>

 
      </Grid>
      </div>

      <div hidden={hiddenMenu1()}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
        <Link href="/demo1" >
          <Paper className={fixedHeightPaper}>
            <Title>Janji Demo</Title>
            <Typography component="p" variant="h4">
              {totalD1}
            </Typography>
            
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={3}>
        <Link href="/demo2" >
          <Paper className={fixedHeightPaper}>
            <Title>Sudah Demo</Title>
            <Typography component="p" variant="h4">
              {totalD2}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={3}>
        <Link href="/demo3" >
          <Paper className={fixedHeightPaper}>
            <Title>Ghosting</Title>
            <Typography component="p" variant="h4">
              {totalD3}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={3}>
        <Link href="/demo4" >
          <Paper className={fixedHeightPaper}>
            <Title>Reschedule</Title>
            <Typography component="p" variant="h4">
              {totalD4}
            </Typography>
          </Paper>
          </Link>
        </Grid>
      </Grid>
      
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Title>Total Demo Order</Title>
               <Typography component="p" variant="h4">
              {totalD}
            </Typography>
          
          </Paper>
        </Grid>

 
      </Grid>
      </div>
      
      <br/>
        <Divider/>
        <br/>
 
    </Wrapper>
  );
};

export default Dashboard;
