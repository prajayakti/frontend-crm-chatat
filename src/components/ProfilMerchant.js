import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";
import Wrapper from "./Wrapper";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ProfilMerchant = (props: any) => {
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
    const loginId = Number(localStorage.getItem("id"))
    const loginName = localStorage.getItem("user_name")
    const loginRoleName = localStorage.getItem("role_name")
    const loginRole = Number(localStorage.getItem("role_id"))
   
 
  
    
  
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

    if (user_id == null) {
      return <Loading />;
    }
    return (
     
       <>
          {/* <div>Merchant milik : {loginName} {loginId} seorang {loginRole} {loginRoleName} </div> */}
          <div>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
          <div>{lama}</div>
          <div>{location}</div>
          <div>{age}</div>
  </>
   
    );
  };
  export default ProfilMerchant;
  