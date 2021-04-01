import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";


import Wrapper from "./Wrapper";

const DemoEdit = (props: any) => {

    const [note, setNote] = useState("");
    const [demo_date, setDemoDates] = useState("");
    const [merchant_id, setMerchantId] = useState(null);
    const [merchants, setMerchants] = useState([]);
    // const [user_id, setUserId] = useState(null);
    // const [users, setUsers] = useState([]);
    // const [user_id2, setUserId2] = useState(null);
    // const [users2, setUsers2] = useState([]);
    // const [demo_media_id, setDemoMediaId] = useState(null);
    // const [demo_medias, setDemoMedias] = useState([]);
    const [demo_result_id, setDemoResultId] = useState(null);
    const [demo_results, setDemoResults] = useState([]);
    const [merchant_status_id, setMerchantStatusId] = useState(null);
    const [merchant_statuses, setMerchantStatuses] = useState([]);
    const [redirect, setRedirect] = useState(false);



  useEffect(() => {
    (async () => {
      const response = await axios.get(`demoresult`);
      setDemoResults(response.data);

      const { data } = await axios.get(`jadwaldemo/${props.match.params.id}`);
      //setId(data.id);
      setNote(data.note);
      setDemoDates(data.demo_date);
      setDemoResultId(data.demoresult.id);
      setMerchantId(data.merchant.id);
      setMerchants(data.merchant.name);
      

    })();
  }, []);
  const demoResultHandle = (e) => {

    const temp = parseInt(e.target.value);
    setDemoResultId(temp);
  };
  useEffect(() => {
    (async () => {
      const response = await axios.get(`merchantstatus`);
      setMerchantStatuses(response.data);

      const { data } = await axios.get(`merchant/${merchant_id}`);
      //setId(data.id);
      setMerchantStatusId(data.merchantstatus.id);

      

    })();
  }, []);

  const merchantStatustHandle = (e) => {

    const temp = parseInt(e.target.value);
    setMerchantStatusId(temp);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`jadwaldemo/${props.match.params.id}`, {
      note,
      demo_result_id,
 
    });
    await axios.put(`merchant/${merchant_id}`, {
      merchant_status_id,
 
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={"/demo1"} />;
  }
  if (demo_result_id == null) {
    return <Loading />;
  }
  const changeDate =(time )=>{
    const tanggal = new Date((time))
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const changeTime = `${tanggal.toLocaleDateString('id', options)}   ${tanggal.toLocaleTimeString()}`
return changeTime
}
  return (
    <Wrapper>
        <div></div>
        <div>Submit Report Demo atas Merchant Owner : <bold>{merchants}</bold> atas Demo pada {changeDate(demo_date)}</div>
      <form onSubmit={submit}>
        
        <div className="mb-3">
          <label>Note</label>
          <input
            className="form-control"
            defaultValue={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Demo Result</label>
          <select
            className="form-control"
            value={demo_result_id}
            onChange={demoResultHandle}
          >
            {demo_results.data.map((dr, index) => {
              return (
                <option key={index} value={dr.id}>
                  {dr.name} 
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label>Merchant Flow Status</label>
          <select
            className="form-control"
            value={merchant_status_id}
            onChange={merchantStatustHandle}
          >
            {merchant_statuses.data.map((ms, index) => {
              return (
                <option key={index} value={ms.id}>
                  {ms.name} 
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
export default DemoEdit;
