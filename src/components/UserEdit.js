import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";


import Wrapper from "./Wrapper";

const UserEdit = (props: any) => {
  //const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role_id, setRoleId] = useState(null);
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    (async () => {
      const response = await axios.get(`roles`);
      setRoles(response.data);

      const { data } = await axios.get(`users/${props.match.params.id}`);
      //setId(data.id);
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setRoleId(data.role.id);
    })();
  }, []);
  // console.log(role_id)
  const handleRole = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setRoleId(temp);
  };
  //console.log(role_id, "ini roleee u=iD+++");
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`users/${props.match.params.id}`, {
      name,
      email,
      phone,
      role_id,
    });
    setRedirect(true);
  };
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
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            value={role_id}
            onChange={handleRole}
          >
            {roles.map((r, index) => {
              return (
                <option key={index} value={r.id}>
                  {r.name} 
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
export default UserEdit;
