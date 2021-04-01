import React, {SyntheticEvent, useState} from 'react';
import imageBanner from '../assets/main-bg.jpg';
import logoBiru from '../assets/bluelogo.png';
import '../Login.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${imageBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chatat.id">
        Chatat.id - 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const classes = useStyles();
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('login', {
            email,
            password
        });

        setRedirect(true);

    }
    
    if (redirect){
        return <Redirect to={"/"} />;
    }

    return (


<Grid container component="main" className={classes.root}>
<CssBaseline />
<Grid item xs={false} sm={4} md={7} className={classes.image} />
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  <div className={classes.paper}>
    {/* <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar> */}
    <img src={logoBiru}/>
    <Typography component="h1" variant="h5" className={classes.title}>
      Customer Success Management
    </Typography>
    <form onSubmit={submit} className={classes.form} Validate>
      <TextField
        variant="filled"
        margin="normal"
        required
        onChange={e => setEmail(e.target.value)}
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="filled"
        margin="normal"
        required
        onChange={e => setPassword(e.target.value)}
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        {/* <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid> */}
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </form>
  </div>
</Grid>
</Grid>

    )
}
export default Login;

