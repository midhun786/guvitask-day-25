import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
function Dashboard() {
    const cardDash=[
        {
        title:"EARNINGS (MONTHLY)",
        price:"$40,000",
        theme:"primary",
       },
       {
        title:"EARNINGS (ANNUAL)",
        price:"$215,000",
        theme:"success",
       },
       {
        title:"TASKS",
        price:"50%",
        theme:"info",
       },
       {
        title:"PENDING REQUESTS",
        price:"18",
        theme:"warning",
       },
]
  return (
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link to="/portal/dashboard" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
    </div>

    {/* <!-- Content Row --> */}
    <div className="row">
        {
        cardDash.map((ele)=>{
        return <Card ele={ele}></Card>
      })
    }  
        </div>
      </div>
    )
  
}
export default Dashboard;
