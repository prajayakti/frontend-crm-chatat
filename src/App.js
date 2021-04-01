//import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import Roles from "./pages/Roles";
import RoleCreate from "./components/RoleCreate";
import RoleEdit from "./components/RolesEdit";
import Merchants from "./pages/Merchants";
import MerchantCreate from "./components/MerchantCreate";
import MerchantEdit from "./components/MerchantEdit";
import MerchantView from "./components/MerchantView";
import Demo from "./pages/Demo";
import DemoCreate from "./components/DemoCreate";
import MarketingCycle from "./pages/MarketingCycle";
import MarketingCycleCreate from "./components/MarketingCycleCreate";
import DemoEdit from "./components/DemoEdit";
import Merchants1 from "./pages/Merchants1";
import Merchants2 from "./pages/Merchants2";
import Merchants3 from "./pages/Merchants3";
import Merchants4 from "./pages/Merchants4";
import Merchants5 from "./pages/Merchants5";
import Merchants6 from "./pages/Merchants6";
import Demo1 from "./pages/Demo1";
import DemoView from "./components/DemoView";
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import Demo4 from "./pages/Demo4";
import DemoAssign from "./components/DemoAssign";
import MerchantAssign from "./components/MerchanAssign";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/users"} exact component={Users} />
        <Route path={"/users/create"} component={UserCreate} />
        <Route path={"/users/:id/edit"} component={UserEdit} />
        <Route path={"/roles"} exact component={Roles} />
        <Route path={"/roles/create"} component={RoleCreate} />
        <Route path={"/roles/:id/edit"} component={RoleEdit} />
        <Route path={"/merchants"} exact component={Merchants} />
        <Route path={"/merchants1"} exact component={Merchants1} />
        <Route path={"/merchants2"} exact component={Merchants2} />
        <Route path={"/merchants3"} exact component={Merchants3} />
        <Route path={"/merchants4"} exact component={Merchants4} />
        <Route path={"/merchants5"} exact component={Merchants5} />
        <Route path={"/merchants6"} exact component={Merchants6} />

        <Route path={"/merchants/create"} component={MerchantCreate} />
        <Route path={"/merchants/:id/edit"} component={MerchantEdit} />
        <Route path={"/merchants/:id/assign"} component={MerchantAssign} />
        <Route path={"/merchants/:id/view"} component={MerchantView} />
        <Route path={"/register"} component={Register} />
        <Route path={"/demo"} exact component={Demo} />
        <Route path={"/demo1"} exact component={Demo1} />
        <Route path={"/demo2"} exact component={Demo2} />
        <Route path={"/demo3"} exact component={Demo3} />
        <Route path={"/demo4"} exact component={Demo4} />
        <Route path={"/demo/create"} component={DemoCreate} />
        <Route path={"/demo/:id/edit"} component={DemoEdit} />
        <Route path={"/demo/:id/assign"} component={DemoAssign} />
        <Route path={"/demo/:id/view"} component={DemoView} />
        <Route path={"/marketingcycle"} exact component={MarketingCycle} />
        <Route path={"/marketingcycle/create"} component={MarketingCycleCreate} />
        <Route path={"/login"} component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
