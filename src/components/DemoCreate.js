import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

import Wrapper from "./Wrapper";

const DemoCreate = () => {
  const [note, setNote] = useState("");
  const [demo_date, setDemoDates] = useState("");
  const [merchant_id, setMerchantId] = useState(null);
  const [merchants, setMerchants] = useState([]);
  const [user_id, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [user_id2, setUserId2] = useState(null);
  const [users2, setUsers2] = useState([]);
  const [demo_media_id, setDemoMediaId] = useState(null);
  const [demo_medias, setDemoMedias] = useState([]);
  const [demo_result_id, setDemoResultId] = useState(null);
  const [demo_results, setDemoResults] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchant`);
      setMerchants(data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`media`);
      setDemoMedias(data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`demoresult`);
      setDemoResults(data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`userstele`);
      setUsers(data.data);
      //setUsers2(data.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`userscxo`);
      setUsers2(data.data);
      //setUsers2(data.data);
    })();
  }, []);


  const userHandle = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setUserId(temp);
  };
  const user2Handle = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setUserId2(temp);
  };
  const merchantHandle = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setMerchantId(temp);
  };
  const demoMediaHandle = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setDemoMediaId(temp);
  };
  const demoResultHandle = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setDemoResultId(temp);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("jadwaldemo", {
      note,
      demo_date,
      merchant_id,
      demo_media_id,
      demo_result_id,
      user_id,
      user_id2,
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={"/demo"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
      <div className="mb-3">
            <label>Merchant</label>
            <select className="form-control" onChange={merchantHandle}>
              {merchants.map((m, index) => {
                return (
                  <option key={index} value={m.id}>
                    {m.name} {m.id}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="mb-3">
            <label>Demo Media</label>
            <select className="form-control" onChange={demoMediaHandle}>
              {demo_medias.map((dm, index) => {
                return (
                  <option key={index} value={dm.id}>
                    {dm.name} {dm.id}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="mb-3">
            <label>Demo Result</label>
            <select className="form-control" onChange={demoResultHandle}>
              {demo_results.map((dr, index) => {
                return (
                  <option key={index} value={dr.id}>
                    {dr.name} {dr.id}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="mb-3">
          <label>Note</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time" onChange={(e) => setDemoDates(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label>Telesales</label>
            <select className="form-control" onChange={userHandle}>
              {users.map((u, index) => {
                return (
                  <option key={index} value={u.id}>
                    {u.name} {u.id}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="mb-3">
            <label>Demo Customer Experience</label>
            <select className="form-control" onChange={user2Handle}>
              {users2.map((u2, index) => {
                return (
                  <option key={index} value={u2.id}>
                    {u2.name} {u2.id}
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
export default DemoCreate;
