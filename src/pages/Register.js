import React, {SyntheticEvent, useState} from 'react';
import '../Login.css';
import imageBanner from '../assets/ilus.jpg';
import axios from 'axios';
import logoBiru from '../assets/bluelogo.png';
import { Redirect } from 'react-router-dom';
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
const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  const redirect2 = false;

  const submit = async (e: SyntheticEvent) => {
      e.preventDefault();

      await axios.post('register', {
        name,  
        email,
          phone,
          password,
        }); 
      setRedirect(true);
     
  };
  
  if (redirect){
      return <Redirect to={"/login"} />;
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
  Registration
  </Typography>
  <form onSubmit={submit} className={classes.form} Validate>
  <TextField
      variant="filled"
      margin="normal"
      required
      onChange={e => setName(e.target.value)}
      fullWidth
      id="name"
      label="Name"
      name="name"
      autoComplete="name"
      autoFocus
    />
    <TextField
      variant="filled"
      margin="normal"
      required
      onChange={e => setPhone(e.target.value)}
      fullWidth
      id="filled-number"
      label="Phone"
      name="number"
      type="number"
      autoComplete="number"
      autoFocus
    />
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
  
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Register
    </Button>
    <Grid container>
      {/* <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid> */}
      <Grid item>
        <Link href="/login" variant="body2">
          {"Already have an account? Sign In"}
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
export default Register;













//const Register = () => {
// class Register extends Component{
//     name = '';
//     email = '';
//     phone = '';
//     password = '';
//     state = {
//         redirect: false
//     };
  
//     submit = (e:SyntheticEvent) => {
//         e.preventDefault();

//         axios.post('register', {
//             name : this.name,
//             email : this.email,
//             phone : this.phone,
//             password : this.password,
//         });
//         this.setState({
//             redirect: true
//         });

        
//     }

//     render(){
//     if (this.state.redirect){
//         return <Redirect to={"/login"} />;
//     }
    
       
//     return (
//       <main className="form-signin">
//         <form onSubmit={this.submit}>
//           <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          
//           <input
//             className="form-control"
//             placeholder="Name"
//             required
//             onChange={e => this.name = e.target.value}
//           />

//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email address"
//             required
//             onChange={e => this.email = e.target.value}
//           />

//           <input
//             className="form-control"
//             placeholder="Phone"
//             required
//             onChange={e => this.phone = e.target.value}
//           />

//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             required
//             onChange={e => this.password = e.target.value}
//           />

//           <button className="w-100 btn btn-lg btn-primary" type="submit">
//             Submit
//           </button>
//         </form>
//       </main>
//     );
//     }
// }

// export default Register;