import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";

import Wrapper from "./Wrapper";

const MerchantAssign = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lama, setLama] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [omset, setOmset] = useState("");
  const [pencatatan, setPencatatan] = useState("");
  const [detail, setDetail] = useState("");
  const [sign_up, setSignUp] = useState("");
  const [free_end, setFreeEnd] = useState("");
  const [last_chatat, setLastChatat] = useState("");
  const [subscribe, setSubscribe] = useState("");
  const [subs_end, setSubsEnd] = useState("");
  const [user_id, setUserId] = useState(null);
  const [users2, setUsers2] = useState([]);
  const [user_id2, setUserId2] = useState(null);
  const [users, setUsers] = useState([]);
  const [jenis_usaha_id, setJenisUsahaId] = useState(null);
  const [jenis_usahas, setJenisUsahas] = useState([]);
  const [source_id, setSourceId] = useState(null);
  const [sources, setSources] = useState([]);
  const [code_id, setCodeId] = useState(null);
  const [codes, setCodes] = useState([]);
  const [gender_id, setGenderId] = useState(null);
  const [genders, setGenders] = useState([]);
  const [merchant_status_id, setMerchantStatusId] = useState(null);
  const [merchant_statuses, setMerchantStatuses] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`jenisusaha`);
      setJenisUsahas(data.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`gender`);
      setGenders(data.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`status`);
      setSources(data.data);
  
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`code`);
      setCodes(data.data);
  
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantstatus`);
      setMerchantStatuses(data.data);
  
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`userscxo`);
      setUsers2(response.data);

      const { data } = await axios.get(`merchant/${props.match.params.id}`);
      //setId(data.id);

      setUserId2(data.user2.id);

  
    })();
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`userstele`);
  //     setUsers(data.data);
  
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`userstele`);
      setUsers(response.data);
 

      const { data } = await axios.get(`merchant/${props.match.params.id}`);
      //setId(data.id);
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setLama(data.lama);
      setLocation(data.location);
      setAge(data.age);
      setOmset(data.omset);
      setJenisUsahaId(data.jenisusaha.id);
      setGenderId(data.gender.id);
      setUserId(data.user.id);
      // setUserId2(data.user2.id);
      setSourceId(data.source.id);
      setSourceId(data.code.id);
      setMerchantStatusId(data.merchantstatus.id);
    })();
  }, []);
  // console.log(sources.data);

  const userChange = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setUserId(temp);

  };
  const userChange2 = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setUserId2(temp);

  };
  const sourceChange = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setSourceId(temp);
  };
  const codeChange = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setCodeId(temp);

  };
  const genderChange = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);

    setGenderId(temp);

  };
  const jenisUsahaChange = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    setJenisUsahaId(temp);

  };
  const merchantStatusChange = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);

    setMerchantStatusId(temp);
  };
  console.log(user_id2, "ini User u=iD+++");
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`merchant/${props.match.params.id}`, {

      user_id,

      merchant_status_id,
      
      source_id,
      
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={"/merchants"} />;
  }
  // console.log(user_id,"cekkk")

  if (user_id == null) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div>Assign Sales untuk Merchant Owner : <bold>{name}</bold> </div>
        <br/>
      <form onSubmit={submit}>
        
        <div className="mb-3">
          <label>Source Data</label>
          <select
            className="form-control"
          value={source_id}
            onChange={sourceChange}
            required
          >
        <option selected >
                                Select Source Data...
                              </option>
            {sources.map((s, index) => {
              return (
                <option key={index} value={s.id}>
                  {s.name}
                </option>
              );
            })}
          </select>
        </div>
        
        <div className="mb-3">
          <label>Sales</label>
          <select
            className="form-control"
        value={user_id}
            onChange={userChange}
            required
          >
             <option selected >
                                Select Sales...
                              </option>
            {users.data.map((r, index) => {
              return (
                <option key={index} value={r.id}>
                  {r.name}
                </option>
              );
            })}
          </select>
        </div>
        
        <div className="mb-3">
          <label>Status</label>
          <select
            className="form-control"
            value={merchant_status_id}
            onChange={merchantStatusChange}
            required
          >
              
            {merchant_statuses.map((m, id) => {
              return (
                <option key={id} value={m.id}>
                  {m.name}
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
export default MerchantAssign;
