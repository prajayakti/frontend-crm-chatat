import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

import Wrapper from "./Wrapper";

const MerchantCreate = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
  // const [result_id, setResultId] = useState(null);
  // const [results, setResults] = useState([]);
  const [user_id, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  //const [user_id2, setUserId2] = useState("");
  //const [users2, setUsers2] = useState([]);
  // const [jenis_usaha_id, setJenisUsahaId] = useState(null);
  // const [jenis_usahas, setJenisUsahas] = useState([]);
  // const [source_id, setSourceId] = useState(null);
  // const [sources, setSources] = useState([]);
  // const [code_id, setCodeId] = useState(null);
  // const [codes, setCodes] = useState([]);
  // const [gender_id, setGenderId] = useState(null);
  // const [genders, setGenders] = useState([]);
  // const [merchant_status_id, setMerchantStatusId] = useState(null);
  // const [merchant_statuses, setMerchantStatuses] = useState([]);
  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`result`);
  //     setResults(data.data);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`jenisusaha`);
  //     setJenisUsahas(data.data);
  //   })();
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`code`);
  //     setCodes(data.data);
  //   })();
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`status`);
  //     setSources(data.data);
  //   })();
  // }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`users`);
      setUsers(data.data);
      //setUsers2(data.data);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`gender`);
  //     setGenders(data.data);
  //   })();
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`merchantstatus`);
  //     setMerchantStatuses(data.data);
  //   })();
  // }, []);

  const handleRole = (e) => {
    //console.log(e.target.value, "handel role")
    const temp = parseInt(e.target.value);
    
    // setJenisUsahaId(temp);
    // setCodeId(temp);
    // setSourceId(temp);
    // setResultId(temp);
    setUserId(temp);
    //setUserId2(temp);
    // setGenderId(temp);
    // setMerchantStatusId(temp);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("merchant", {
      name,
      email,
      phone,
      lama,
      location,
      age,
      omset,
      pencatatan,
      detail,
      sign_up,
      free_end,
      last_chatat,
      subscribe,
      subs_end,
      // result_id,
      user_id,
      //user_id2,
      // jenis_usaha_id,
      // source_id,
      // code_id,
      // gender_id,
      // merchant_status_id,
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={"/merchants"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Merchant Name</label>
          <input
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Lama</label>
          <input
            className="form-control"
            onChange={(e) => setLama(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Omset</label>
          <input
            className="form-control"
            onChange={(e) => setOmset(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Pencatatan</label>
          <input
            className="form-control"
            onChange={(e) => setPencatatan(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Detail Usaha</label>
          <input
            className="form-control"
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Tanggal Sign Up</label>
          <input
            //type="date"
            className="form-control"
            onChange={(e) => setSignUp(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Tanggal Free Berakhir</label>
          <input
            //type="date"
            className="form-control"
            onChange={(e) => setFreeEnd(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Terakhir Mencatat</label>
          <input
            //type="date"
            className="form-control"
            onChange={(e) => setLastChatat(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Tanggal Subscribe</label>
          <input
            //type="date"
            className="form-control"
            onChange={(e) => setSubscribe(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Subscribe Berakhir</label>
          <input
            //type="date"
            className="form-control"
            onChange={(e) => setSubsEnd(e.target.value)}
          />
        </div>
        {/* <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Result</label>
          <div className="col-sm-10">
            {results.map((result, index) => {
              return (
                <div className="form-check form-check-inline col-3" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={result.id}
                    onChange={handleRole}
                  />
                  <label className="form-check-label">{result.name}</label>
                </div>
              );
            })}
          </div>
        </div>

       
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Jenis Usaha</label>
          <div className="col-sm-10">
            {jenis_usahas.map((j, index) => {
              return (
                <div className="form-check form-check-inline col-3" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={j.id}
                    onChange={handleRole}
                  />
                  <label className="form-check-label">{j.name}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Activation Code</label>
          <div className="col-sm-10">
            {codes.map((c, index) => {
              return (
                <div className="form-check form-check-inline col-3" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={c.id}
                    onChange={handleRole}
                  />
                  <label className="form-check-label">{c.name}</label>
                </div>
              );
            })}
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Data Source</label>
            <div className="col-sm-10">
              {sources.map((s, index) => {
                return (
                  <div
                    className="form-check form-check-inline col-3"
                    key={index}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={s.id}
                      onChange={handleRole}
                    />
                    <label className="form-check-label">{s.name}</label>
                  </div>
                );
              })}
            </div>
          </div> */}
          <div className="mb-3">
            <label>User Marketing</label>
            <select className="form-control" onChange={handleRole}>
              {users.map((u, index) => {
                return (
                  <option key={index} value={u.id}>
                    {u.name} {u.id}
                  </option>
                );
              })}
            </select>
          </div>
          {/* <div className="mb-3">
            <label>User CXO</label>
            <select className="form-control" onChange={handleRole}>
              {users2.map((u2, index) => {
                return (
                  <option key={index} value={u2.id}>
                    {u2.name} {u2.id}
                  </option>
                );
              })}
            </select>
          </div> */}

          {/* <div className="mb-3">
            <label>Gender</label>
            <select className="form-control" onChange={handleRole}>
              {genders.map((g, index) => {
                return (
                  <option key={index} value={g.id}>
                    {g.name} {g.id}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label>Status Merchant</label>
            <select className="form-control" onChange={handleRole}>
              {merchant_statuses.map((ms, index) => {
                return (
                  <option key={index} value={ms.id}>
                    {ms.name} {ms.id}
                  </option>
                );
              })}
            </select>
          </div>
        </div> */}
        <button className="btn btn-outline-secondary">Submit</button>
      </form>
    </Wrapper>
  );
};
export default MerchantCreate;
