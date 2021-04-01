import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
//import UserModel from "../models/user";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  //const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`users?page=${page}`);
      setUsers(data.data);
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
    
    if (window.confirm("Yakin mau dihapus user ini?")) {
     
      await axios.delete(`users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={"/users/create"} className="btn btn-sm btn-outline-secondary">
          Add User
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                      <a
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => del(user.id)}
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

export default Users;
