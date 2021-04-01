import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import {Redirect } from "react-router-dom";

import Wrapper from "./Wrapper";

const UserCreate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role_id, setRoleId] = useState('');
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`roles`);
      setRoles(data);
    })();
  }, []);

  const handleRole = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setRoleId(temp);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
     await axios.post('users', {
      name,
      email,
      phone,
      role_id
    });
    setRedirect(true);
  }
  if (redirect) {
    return <Redirect to={"/users"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            onChange={handleRole}
          >
            {roles.map((r, index) => {
              return (
                <option key={index} value={r.id}>
                  {r.name} {r.id}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn btn-outline-secondary">Submit</button>
      </form>
    </Wrapper>
  );
};
export default UserCreate;
