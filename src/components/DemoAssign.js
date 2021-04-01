import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";


import Wrapper from "./Wrapper";

const DemoAssign = (props: any) => {

    const [note, setNote] = useState("");
    const [demo_date, setDemoDates] = useState("");
    const [merchant_id, setMerchantId] = useState(null);
    const [merchants, setMerchants] = useState([]);
    // const [user_id, setUserId] = useState(null);
    // const [users, setUsers] = useState([]);
    const [user_id2, setUserId2] = useState(null);
    const [users2, setUsers2] = useState([]);
    const [demo_media_id, setDemoMediaId] = useState(null);
    const [demo_medias, setDemoMedias] = useState([]);
    const demo_result_id = 1;
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
 
      setMerchantId(data.merchant.id);
      setMerchants(data.merchant.name);
      setDemoMediaId(data.demomedia.name)
      

    })();
  }, []);
  useEffect(() => {
    (async () => {

      const { data } = await axios.get(`demomedia`);
      //setId(data.id);
      setDemoMedias(data.data);
      

    })();
  }, []);


  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`userscxo`);
      setUsers2(data.data);
      //setUsers2(data.data);
    })();
  }, []);

  const user2Handle = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setUserId2(temp);
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



  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`jadwaldemo/${props.match.params.id}`, {
      user_id2,
      demo_result_id,
 
    });
    await axios.put(`merchant/${merchant_id}`, {
     user_id2,
 
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={"/demo"} />;
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
        <div>Assign CXO untuk Demo atas Merchant Owner : <bold>{merchants}</bold>  pada {changeDate(demo_date)} melalui {demo_media_id}</div>
        <br/>
      <form onSubmit={submit}>
 
      <div className="mb-3">
            <label>Assigned CXO</label>
            <select className="form-control" onChange={user2Handle} >
            <option selected value={user_id2}>
            {user_id2}
                              </option>

              {users2.map((u2, index) => {
                return (
                  <option key={index} value={u2.id}>
                    {u2.name} 
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
export default DemoAssign;
