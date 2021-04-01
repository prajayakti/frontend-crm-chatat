import axios from "axios";
import React, { useState, useEffect, SyntheticEvent } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Loading from "./Loading";
import Wrapper from "./Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import StoreIcon from "@material-ui/icons/Store";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { OutlinedInput } from "@material-ui/core";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
 
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #1664F7",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    width: 600,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  table: {
    minWidth: 650,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  // button: {
  //   marginTop: theme.spacing(3),
  //   marginLeft: theme.spacing(1),
  // },
  button: {
    margin: theme.spacing(1),
  },
}));

const MerchantView = (props: any) => {
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
  const [updated_at, setUpdatedAt] = useState("");
  const [user_id, setUserId] = useState(null);
  const [note, setNote] = useState(null);
  const [merchant_id, setMerchantId] = useState(null);
  const [tele, setTele] = useState("");
  const [cxo, setCxo] = useState("");
  const [jenisusaha, setJenisUsaha] = useState("");
  const [source, setSourceName] = useState("");
  const [code, setCodeName] = useState("");
  const [result_id, setResultId] = useState(null);
  const [results, setResults] = useState([]);
  const [gender, setGender] = useState("");
  const [merchantstatus, setMerchantStatusName] = useState("");
  const [merchant_status_id, setMerchantStatusId] = useState(null);
  const [merchant_statuses, setMerchantStatuses] = useState([]);
  //untuk update data merchant
  const [jenis_usaha_id, setJenisUsahaId] = useState(null);
  const [jenis_usahas, setJenisUsahas] = useState([]);
  const [source_id, setSourceId] = useState(null);
  const [sources, setSources] = useState([]);
  const [gender_id, setGenderId] = useState(null);
  const [genders, setGenders] = useState([]);
  //untuk Demo
  const [demo_date, setDemoDates] = useState("");
  const [demo_media_id, setDemoMediaId] = useState(null);
  const [user_id2, setUserId2] = useState("");
  const [demo_medias, setDemoMedias] = useState([]);
  const [demo_results, setDemoResults] = useState([]);
  const [jadwaldemos, setJadwalDemos] = useState([]);

  //untuk ...
  const [phone_status_id, setPhoneStatusId] = useState(null);
  const [phone_statuses, setPhoneStatuses] = useState([]);
  const [wa_status_id, setWaStatusId] = useState(null);
  const [wa_statuses, setWaStatuses] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [marketingcyles, setMarketingCycles] = useState([]);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const loginId = Number(localStorage.getItem("id"));
  const loginName = localStorage.getItem("user_name");
  const loginRoleName = localStorage.getItem("role_name");
  const loginRole = Number(localStorage.getItem("role_id"));
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const history = useHistory();
  const [media, setMedia] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  //untuk Demo Modal
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`jenisusaha`);
      setJenisUsahas(data.data);
    })();
  }, []);

  const jenisUsahaHandle = (e) => {
    const temp5 = parseInt(e.target.value);
    setJenisUsahaId(temp5);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`gender`);
      setGenders(data.data);
    })();
  }, []);

  const genderHandle = (e) => {
    const temp6 = parseInt(e.target.value);
    setGenderId(temp6);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`status`);
      setSources(data.data);
    })();
  }, []);

  const sourceHandle = (e) => {
    const temp7 = parseInt(e.target.value);
    setSourceId(temp7);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchantstatus`);
      setMerchantStatuses(data.data);
    })();
  }, []);

  const merchantStatusHandle = (e) => {
    const temp4 = parseInt(e.target.value);
    setMerchantStatusId(temp4);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`phonestatus`);
      setPhoneStatuses(data.data);
    })();
  }, []);

  const phoneStatusHandle = (e) => {
    const temp3 = parseInt(e.target.value);
    setPhoneStatusId(temp3);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`wastatus`);
      setWaStatuses(data.data);
    })();
  }, []);
  const waStatusHandle = (e) => {
    const temp2 = parseInt(e.target.value);
    setWaStatusId(temp2);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`demoresult`);
      setDemoResults(data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`result`);
      setResults(data.data);
    })();
  }, []);
  const resultHandle = (e) => {
    const temp = parseInt(e.target.value);
    setResultId(temp);
  };

  //untuk Demo Media Data Array
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`media`);
      setDemoMedias(data.data);
    })();
  }, []);
  //untuk handle Integer Inputan User
  // const mediaHandle = (e) => {
  //   const temp = parseInt(e.target.value);
  //   setDemoMediaId(temp);
  // };
  const mediaHandle = (event) => {
    setDemoMediaId(event.target.value);
  };
  //untuk manggil data Tabel Marketing Cycle
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `marketingcyclemerchant/${props.match.params.id}?page=${page}`
      );
      setMarketingCycles(data.data);
    })();
  }, [page]);
  //ini bisa sih tapi last page nya masih ga jalan
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    setPage(page - 1);
  };

  //untuk manggil data Tabel Jadwal Demo
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `jadwaldemomerchant/${props.match.params.id}?page=${page}`
      );
      setJadwalDemos(data.data);
    })();
  }, [page2]);
  //ini bisa sih tapi last page nya masih ga jalan
  const next2 = () => {
    setPage2(page2 + 1);
  };
  const prev2 = () => {
    setPage2(page2 - 1);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`merchant/${props.match.params.id}`);

      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setLama(data.lama);
      setLocation(data.location);
      setPencatatan(data.pencatatan);
      setSignUp(data.sign_up);
      setFreeEnd(data.free_end);
      setDetail(data.detail);
      setLastChatat(data.last_chatat);
      setSubsEnd(data.subs_end);
      setSubscribe(data.subscribe);
      setAge(data.age);
      setMerchantId(data.id);
      setUpdatedAt(data.updated_at);
      setOmset(data.omset);
      setJenisUsaha(data.jenisusaha.name);
      setJenisUsahaId(data.jenisusaha.id);
      setSourceId(data.source.id);
      setGender(data.gender.name);
      setGenderId(data.gender.id);
      setTele(data.user.name);
      setUserId(data.user.id);
      setUserId2(data.user.id);
      setCxo(data.user2.name);
      setSourceName(data.source.name);
      setCodeName(data.code.name);
      setMerchantStatusName(data.merchantstatus.name);
    })();
  }, []);

  // if (marketingcyles == false) {
  //   return <Loading />;
  // }
  const changeDate = (time) => {
    const tanggal = new Date(time);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const changeTime = `${tanggal.toLocaleDateString(
      "id",
      options
    )}   ${tanggal.toLocaleTimeString()}`;

    return changeTime;
  };

  const submit2 = async () => {
    // e.preventDefault();
    await axios.put(`merchant/${props.match.params.id}`, {
      merchant_status_id,
    });
    // setRedirect(true);
  };
  // if (redirect) {
  //   return <Redirect to={`/merchants/${props.match.params.id}/view`} />;
  // }
  const submit3 = async (e: SyntheticEvent) => {
    // e.preventDefault();
    await axios.put(`merchant/${props.match.params.id}`, {
      lama,
      location,
      age,
      omset,
      detail,
      jenis_usaha_id,
      gender_id,
      source_id,
    });
    // setRedirect(true);
  };
  // if (redirect) {
  //   return <Redirect to={`/merchants`} />;
  // }
  const submit = async () => {
    // e.preventDefault();
    await axios.post("marketingcycle", {
      user_id,
      note,
      merchant_id,
      phone_status_id,
      wa_status_id,
      result_id,
    });
    // setRedirect(true);
    // history.push(`/merchants/${merchant_id}/view`)
  };
  // if (redirect) {
  //   return <Redirect to={`/merchants`} />;
  // }
  //untuk post Jadwal Demo
  const submit4 = async () => {
    // e.preventDefault();
    await axios.post("jadwaldemo", {
      user_id,
      merchant_id,
      demo_media_id,
      demo_date,
    });
    // setRedirect(true);
  };
  // if (redirect) {
  //   return <Redirect to={`/merchants`} />;
  // }

  return (
    <Wrapper>
      <main className={classes.layout}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Business Owner
                </Typography>
                <Typography variant="h4" component="h2">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="contained primary button group"
                >
                  {/* FLOW FORM */}
                  <Button onClick={handleOpen1}>Flow</Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open1}
                    onClose={handleClose1}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open1}>
                      <div className={classes.paperModal}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Email
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {email}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Phone
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {phone}
                            </Typography>
                          </Grid>
                        </Grid>
                        <br />
                        <Divider />
                        <br />
                        <form onSubmit={submit2}>
                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={user_id}
                          />

                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={merchant_id}
                          />

                          <div className="mb-3">
                            <label>Merchant Flow Status</label>
                            <select
                              className="form-control"
                              //  Value={phone_status_id}
                              onChange={merchantStatusHandle}
                            >
                              <option selected value={merchant_status_id}>
                                {merchantstatus}
                              </option>
                              {merchant_statuses.map((ms, index) => {
                                return (
                                  <option key={index} value={ms.id}>
                                    {ms.name} {ms.id}
                                  </option>
                                );
                              })}
                            </select>
                          </div>

                          <button className="btn btn-outline-secondary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </Fade>
                  </Modal>
                  {/* CALL FORM                   */}
                  <Button onClick={handleOpen}>Call</Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paperModal}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Email
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {email}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Phone
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {phone}
                            </Typography>
                          </Grid>
                        </Grid>
                        <br />
                        <Divider />

                        <form onSubmit={submit}>
                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={user_id}
                          />

                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={merchant_id}
                          />

                          <div className="mb-3">
                            <label>Phone Status</label>
                            <select
                              className="form-control"
                              onChange={phoneStatusHandle}
                            >
                              <option selected value="">
                                Select Phone Status...
                              </option>
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
                            <label>Wa Status</label>
                            <select
                              className="form-control"
                              //  Value={phone_status_id}
                              onChange={waStatusHandle}
                            >
                              <option selected>Select Wa Status...</option>
                              {wa_statuses.map((ws, index) => {
                                return (
                                  <option key={index} value={ws.id}>
                                    {ws.name} {ws.id}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="mb-3">
                            <label>Call Result</label>
                            <select
                              className="form-control"
                              //  Value={phone_status_id}
                              onChange={resultHandle}
                            >
                              <option selected value="">
                                Select Result ...
                              </option>
                              {results.map((rs, index) => {
                                return (
                                  <option key={index} value={rs.id}>
                                    {rs.name} {rs.id}
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
                          <button className="btn btn-outline-secondary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </Fade>
                  </Modal>
                  {/* DEMO FORM                 */}
                  <Button onClick={handleOpen4}>Demo</Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open4}
                    onClose={handleClose4}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open4}>
                      <div className={classes.paperModal}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Email
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {email}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Phone
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {phone}
                            </Typography>
                          </Grid>
                        </Grid>
                        <br />
                        <Divider />
                        <br />
                        <form onSubmit={submit4}>
                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={user_id}
                          />

                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={merchant_id}
                          />
                          
                          <div className="mb-3">
                            <label>Demo Date Time</label>
                            <DateTimePickerComponent
                              id="datetimepicker"
                              placeholder="Select a date and time"
                              required
                              onChange={(e) => setDemoDates(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <FormControl
                              required
                              className={classes.formControl}
                            >
                              <InputLabel id="demo-simple-select-required-label">
                                Media Demo
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                onChange={mediaHandle}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {demo_medias.map((dm, index) => {
                                  return (
                                    <MenuItem key={index} value={dm.id}>
                                      {dm.name} 
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                              <FormHelperText>Required</FormHelperText>
                            </FormControl>
                          </div>


                          <button className="btn btn-outline-secondary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </Fade>
                  </Modal>
                  {/* UPDATE DATA FROM                  */}
                  <Button onClick={handleOpen3}>Update Data</Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open3}
                    onClose={handleClose3}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open3}>
                      <div className={classes.paperModal}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Email
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {email}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="caption" color="textSecondary">
                              Phone
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                              {phone}
                            </Typography>
                          </Grid>
                        </Grid>
                        <br />
                        <Divider />
                        <br />
                        <form onSubmit={submit3}>
                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={user_id}
                          />

                          <input
                            type="text"
                            hidden
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value={merchant_id}
                          />

                          <div className="mb-3">
                            <label>Umur</label>
                            <input
                              className="form-control"
                              defaultValue={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label>Gender</label>
                            <select
                              className="form-control"
                              value={gender_id}
                              onChange={genderHandle}
                              required
                            >
                              {genders.map((gs, index) => {
                                return (
                                  <option key={index} value={gs.id}>
                                    {gs.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="mb-3">
                            <label>Lama Usaha</label>
                            <input
                              className="form-control"
                              defaultValue={lama}
                              onChange={(e) => setLama(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label>Location</label>
                            <input
                              className="form-control"
                              defaultValue={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label>Omset Usaha</label>
                            <input
                              className="form-control"
                              defaultValue={omset}
                              onChange={(e) => setOmset(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label>Detail Usaha</label>
                            <input
                              className="form-control"
                              defaultValue={detail}
                              onChange={(e) => setDetail(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label>Source Data</label>
                            <select
                              className="form-control"
                              value={source_id}
                              onChange={sourceHandle}
                            >
                              {sources.map((so, index) => {
                                return (
                                  <option key={index} value={so.id}>
                                    {so.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="mb-3">
                            <label>Jenis Usaha</label>
                            <select
                              className="form-control"
                              value={jenis_usaha_id}
                              onChange={jenisUsahaHandle}
                              required
                            >
                              {jenis_usahas.map((j, index) => {
                                return (
                                  <option key={index} value={j.id}>
                                    {j.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>

                          <button className="btn btn-outline-secondary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </Fade>
                  </Modal>
                </ButtonGroup>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            {/* DATA MERCHANT */}
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Email
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Phone
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {phone}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Jenis Kelamin
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {gender}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Umur
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {age}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Source Data
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {source}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Activation Code
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {code}
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Location
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {location}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Business Duration
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {lama}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Business Type
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {jenisusaha}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Business Description
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {detail}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Omset
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {omset}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Merchant Status
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {merchantstatus}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Total Activity on App
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {pencatatan}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Last Activity
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {last_chatat}
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Sign Up
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {sign_up}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Free Trial End
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {free_end}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Subscription Date
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {subscribe}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Subscription End
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {subs_end}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Last Update
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {changeDate(updated_at)}
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Marketing
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {tele}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" color="textSecondary">
                  Customer Experience
                </Typography>
                <Typography variant="subtitle2" component="h2">
                  {cxo}
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* TABEL MARKETING CYCLE */}
          <Paper className={classes.paper}>
            <Typography variant="caption" color="textSecondary">
              Business Owner: {name}
            </Typography>
            <Typography variant="h6" component="h2">
              Marketing Cycle
            </Typography>
            <br />
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Call Date</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>WA</TableCell>
                    <TableCell>Result</TableCell>
                    <TableCell>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {marketingcyles.map((marketingcyle) => (
                    <TableRow key={marketingcyle.id}>
                      <TableCell component="th" scope="row">
                        {changeDate(marketingcyle.created_at)}
                      </TableCell>

                      <TableCell>{marketingcyle.phonestatus.name}</TableCell>
                      <TableCell>{marketingcyle.wastatus.name}</TableCell>
                      <TableCell>{marketingcyle.result.name}</TableCell>
                      <TableCell>{marketingcyle.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p>&nbsp;</p>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={prev}>
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={next}>
                    Next
                  </button>
                </li>
                <li className="page-item"></li>
              </ul>
            </nav>
          </Paper>
          {/* TABEL JADWAL DEMO */}
          <Paper className={classes.paper}>
            <Typography variant="caption" color="textSecondary">
              Business Owner: {name}
            </Typography>
            <Typography variant="h6" component="h2">
              Demo History
            </Typography>
            <br />
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Demo Date</TableCell>
                    <TableCell>Media</TableCell>
                    <TableCell>CXO</TableCell>
                    <TableCell>Demo Status</TableCell>
                    <TableCell>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jadwaldemos.map((jadwaldemo) => (
                    <TableRow key={jadwaldemo.id}>
                      <TableCell component="th" scope="row">
                        {changeDate(jadwaldemo.demo_date)}
                      </TableCell>
                      <TableCell>{jadwaldemo.demomedia.name}</TableCell>
                      <TableCell>{jadwaldemo.user2.name}</TableCell>
                      <TableCell>{jadwaldemo.demoresult.name}</TableCell>
                      <TableCell>{jadwaldemo.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p>&nbsp;</p>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={prev2}>
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={next2}>
                    Next
                  </button>
                </li>
                <li className="page-item"></li>
              </ul>
            </nav>
          </Paper>
        </Grid>
      </main>
    </Wrapper>
  );
};
export default MerchantView;
