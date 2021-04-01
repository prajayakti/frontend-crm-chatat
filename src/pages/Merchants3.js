import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
//import UserModel from "../models/user";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Merchants3 = (props:any) => {
  const [merchants, setMerchants] = useState([]);
  const [page, setPage] = useState(1);

const loginId = Number(localStorage.getItem("id"));
const classes = useStyles();

  useEffect(() => {
      (async () => {
        const { data } = await axios.get(`merchanttele3/${loginId}?page=${page}`);
      
        setMerchants(data.data);

      })();
   
  }, [page]);
console.log(loginId)
  //ini bisa sih tapi last page nya masih ga jalan
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    setPage(page - 1);
  };

  
  // const del = async (id) => {
    
  //   if (window.confirm("Yakin mau dihapus Merchant ini?")) {
     
  //     await axios.delete(`merchant/${id}`);
  //     setMerchants(merchants.filter((m) => m.id !== id));
  //   }
  // };
console.log(props)
  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
      <div className="d-flex justify-content-between">
          <div>
            <Typography variant="h5" color="primary">
              DEMO
            </Typography>
          </div>
          <div>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button href={"/merchants1"}>Data Leads</Button>
              <Button href={"/merchants2"}>Sign Up</Button>
              <Button href={"/merchants3"}>Demo </Button>
              <Button href={"/merchants4"}>Follow Up</Button>
              <Button href={"/merchants5"}>Sign Up CURN</Button>
              <Button href={"/merchants6"}>Subscribe</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              {/* <th>Id user yg login id nya  {user.id} dan Namanya adalah {user.name} </th> */}
              <th>Merchant Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Marketing</th>
            
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((merchant) => {
              return (
                <tr key={merchant.id}>
                  
                  <td>{merchant.name}</td>
                  <td>{merchant.email}</td>
                  <td>{merchant.phone}</td>
                  <td>{merchant.user.name}</td>
                 
                  <td>{merchant.merchantstatus.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                    <Link to={`/merchants/${merchant.id}/view`} className="btn btn-sm btn-outline-secondary">Action</Link>
                      {/* <Link to={`/merchants/${merchant.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link> */}
                      {/* <a
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => del(merchant.id)}
                      >
                        Delete 
                      </a> */}
                      {/* <button className="btn btn-sm btn-outline-secondary" >Delete</button> */}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button  className="page-link" onClick={prev}>
              Previous
            </button>
          </li>
          <li className="page-item">
            <button  className="page-link" onClick={next}>
              Next
            </button>
          </li>
          <li className="page-item"></li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Merchants3;
