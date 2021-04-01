import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
//import UserModel from "../models/user";
import { Link } from "react-router-dom";

const MarketingCycle = () => {
  const [marketingcyles, setMarketingCycles] = useState([]);
  const [page, setPage] = useState(1);
  //const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`marketingcycle?page=${page}`);
      setMarketingCycles(data.data);
    })();
  }, [page]);
  //ini bisa sih tapi last page nya masih ga jalan
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    setPage(page - 1);
  };

  
  const del = async (id) => {
    
    if (window.confirm("Yakin mau dihapus Data  ini?")) {
     
      await axios.delete(`marketingcycle/${id}`);
      setMarketingCycles(marketingcyles.filter((m) => m.id !== id));
    }
  };

const changeDate =(time )=>{
    const tanggal = new Date((time))
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const changeTime = `${tanggal.toLocaleDateString('id', options)}   ${tanggal.toLocaleTimeString()}`

return changeTime
}

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={"/marketingcycle/create"} className="btn btn-sm btn-outline-secondary">
          Add Marketing Cycle
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Merchant Name</th>
              <th>Phone Status</th>
              <th>WA Status</th>
              <th>Marketing</th>
              <th>Call Date</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {marketingcyles.map((marketingcyle) => {
              return (
                <tr key={marketingcyle.id}>
                  <td>{marketingcyle.id}</td>
                  <td>{marketingcyle.merchant.name}</td>
                  <td>{marketingcyle.phonestatus.name}</td>
                  <td>{marketingcyle.wastatus.name}</td>
                  <td>{marketingcyle.user.name}</td>
                  <td>{changeDate(marketingcyle.created_at)}</td>
                  
                  <td>
            
                    {/* <div className="btn-group mr-2">
                    <Link to={`/merchants/${merchant.id}/view`} className="btn btn-sm btn-outline-secondary">View</Link>
                      <Link to={`/merchants/${merchant.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                      <a
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => del(merchant.id)}
                      >
                        Delete 
                      </a>
    
                    </div> */}
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

export default MarketingCycle;
