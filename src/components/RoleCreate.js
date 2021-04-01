import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import {Redirect } from "react-router-dom";

import Wrapper from "./Wrapper";

const RoleCreate = () => {
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`roles`);
      setName(data);
    })();
  }, []);

//   const handleRole = (e) => {
//     //console.log(e.target.value, "handel role")
//     const temp = parseInt(e.target.value);
//     setRoleId(temp);
//   };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
     await axios.post('roles', {
      name
    });
    setRedirect(true);
  }
  if (redirect) {
    return <Redirect to={"/roles"} />;
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

        <button className="btn btn-outline-secondary">Submit</button>
      </form>
    </Wrapper>
  );
};
export default RoleCreate;
