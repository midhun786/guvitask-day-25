import React from 'react'
import SideBar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from 'react-router-dom';
function Portal() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar></NavBar>
          <Outlet />
          </div>
      </div>
    </div>
  )
}

export default Portal;
