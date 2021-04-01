import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

import Wrapper from "./Wrapper";

const MarketingCycleCreate = () => {
  const [note, setNote] = useState("");
  const [merchant_id, setMerchantId] = useState("");
  const [merchants, setMerchants] = useState([]);
  const [user_id, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [phone_status_id, setPhoneStatusId] = useState(null);
  const [phone_statuses, setPhoneStatuses] = useState([]);
  const [wa_status_id, setWaStatusId] = useState(null);
  const [wa_statuses, setWaStatuses] = useState([]);
  const [result_id, setResultId] = useState(null);
  const [results, setResults] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchant`);
      setMerchants(data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`phonestatus`);
      setPhoneStatuses(data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`result`);
      setResults(data.data);
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
      const { data } = await axios.get(`wastatus`);
      setWaStatuses(data.data);
      //setUsers2(data.data);
    })();
  }, []);


  const userHandle = (e) => {
    const temp = parseInt(e.target.value);
    setUserId(temp);
  };
  const resultHandle = (e) => {
    const temp1 = parseInt(e.target.value);
    setResultId(temp1);
  };
  const merchantHandle = (e) => {
    const temp2 = parseInt(e.target.value);
    setMerchantId(temp2);
  };
  const phoneStatusHandle = (e) => {
    const temp3 = parseInt(e.target.value);
    setPhoneStatusId(temp3);
  };
  const waStatusHandle = (e) => {
    const temp4 = parseInt(e.target.value);
    setWaStatusId(temp4);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("marketingcycle", {
      note,
      result_id,
      merchant_id,
      phone_status_id,
      wa_status_id,
      user_id,

    });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={"/marketingcycle"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
      <div className="mb-3">
            <label>Merchant</label>
            <select className="form-control" 
            
            onChange={merchantHandle}><option selected>Select Merchant...</option>
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
            <label>Phone Status</label>
            <select className="form-control"
            //  Value={phone_status_id} 
             onChange={phoneStatusHandle} ><option selected value="x">Select Phone Status...</option>
              {phone_statuses.map((ps, index) => {
                return (
                  <option key={index} value={ps.id}>
                    {ps.name} {ps.id}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="mb-3">
            <label>WA Status</label>
            <select className="form-control" 
            onChange={waStatusHandle} 
            > <option selected>Select WA Status...</option>
              {wa_statuses.map((wa, index) => {
                return (
                  <option key={index} value={wa.id}>
                    {wa.name} {wa.id}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="mb-3">
            <label>Result</label>
            <select className="form-control" onChange={resultHandle}
            > <option selected>Select Result...</option>
              {results.map((r, index) => {
                return (
                  <option key={index} value={r.id}>
                    {r.name} {r.id}
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
            placeholder="input note..."
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        {/* <div className="mb-3">
        <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time" onChange={(e) => setDemoDates(e.target.value)}/>
        </div> */}
        <div className="mb-3">
            <label>Telesales</label>
            <select className="form-control" onChange={userHandle}><option selected>Select TeleSales...</option>
              {users.map((u, index) => {
                return (
                  <option key={index} value={u.id}>
                    {u.name} {u.id}
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
export default MarketingCycleCreate;
