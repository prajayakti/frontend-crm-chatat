import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";


import Wrapper from "./Wrapper";

const RoleEdit = (props: any) => {

  const [name, setName] = useState("");

  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    (async () => {
      const response = await axios.get(`roles`);
      setName(response.data);

      const { data } = await axios.get(`roles/${props.match.params.id}`);

      setName(data.name);

    })();
  }, []);
//   // console.log(role_id)
//   const handleRole = (e) => {
//     //console.log(e.target.value, "handel role")
//     const temp = parseInt(e.target.value);
//     setRoleId(temp);
//   };
  //console.log(role_id, "ini roleee u=iD+++");
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post(`roles/${props.match.params.id}`, {
      name

    });
    setRedirect(true);
  };
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
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        
        <button className="btn btn-outline-secondary">Submit</button>
      </form>
    </Wrapper>
  );
};
export default RoleEdit;
