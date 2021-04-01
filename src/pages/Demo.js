import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
//import UserModel from "../models/user";
import { Link } from "react-router-dom";

const Demo = () => {
  const [demos, setDemos] = useState([]);
  const [page, setPage] = useState(1);
  //const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`jadwaldemo?page=${page}`);
      setDemos(data.data);
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
    
    if (window.confirm("Yakin mau dihapus Jadwal Demo ini?")) {
     
      await axios.delete(`jadwaldemo/${id}`);
      setDemos(demos.filter((m) => m.id !== id));
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
        <Link to={"/demo/create"} className="btn btn-sm btn-outline-secondary">
          Add Demo Schedule
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Merchant Name</th>
              <th>Demo Date</th>
              <th>Marketing</th>
              <th>CXO</th>
              <th>Media Demo</th>
              <th>Demo Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {demos.map((demo) => {
              return (
                <tr key={demo.id}>
                  <td>{demo.id}</td>
                  <td>{demo.merchant.name}</td>
                  <td>{changeDate(demo.demo_date)}</td>
                  <td>{demo.user.name}</td>
                  <td>{demo.user2.name}</td>
                  <td>{demo.demomedia.name}
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
                  <td>{demo.demoresult.name}</td>
                  <td>
                  <Link to={`/demo/${demo.id}/assign`} className="btn btn-sm btn-outline-secondary">Assign CXO</Link>
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

export default Demo;
