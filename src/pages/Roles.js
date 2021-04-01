import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
//import UserModel from "../models/user";
import { Link } from "react-router-dom";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  //const [page, setPage] = useState(1);
  //const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`roles`);
      setRoles(data);
    })();
  }, []);
  //ini bisa sih tapi last page nya masih ga jalan
//   const next = () => {
//     setPage(page + 1);
//   };
//   const prev = () => {
//     setPage(page - 1);
//   };

  
  const del = async (id) => {
    
    if (window.confirm("Yakin mau dihapus Roles ini?")) {
     
      await axios.delete(`roles/${id}`);
      setRoles(roles.filter((r) => r.id !== id));
    }
  };

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={"/roles/create"} className="btn btn-sm btn-outline-secondary">
          Add Roles
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => {
              return (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link to={`/roles/${role.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                      <a
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => del(role.id)}
                      >
                        Delete 
                      </a>
                      {/* <button className="btn btn-sm btn-outline-secondary" >Delete</button> */}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <nav>
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
      </nav> */}
    </Wrapper>
  );
};

export default Roles;
