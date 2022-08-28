import logo from "./logo.svg";
// import "./CSS/sb-admin-2.css";
import "./CSS/sb-admin-2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Sidebar";
import NavBar from "./NavBar";
import Dashboard from "./DashBoard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Login from "./Login";
import Portal from "./Portal";
import Userview from "./Userview";
import Createuser from "./Createuser";
import Edituser from "./Edituser";
import Product from "./Products/product";
import Createprod from "./Products/Createprod";
import Prodview from "./Products/Prodview";
import Prodedit from "./Prodedit";
function App() {
  return (
    <BrowserRouter>
      {/* <Dashboard></Dashboard>
          <Users></Users> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="users" element={<Users />} /> 
          
          <Route path="create-user" element={<Createuser />} />
          <Route path="users/:userviewid" element={<Userview />} />
          <Route path="users/edit/:id" element={<Edituser />} />
          
          <Route path="products" element={<Product />} />
          
          <Route path="create-product" element={<Createprod />} />
          <Route path="prodview/:id" element={<Prodview />} />
          <Route path="prodedit/:id" element={<Prodedit/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
