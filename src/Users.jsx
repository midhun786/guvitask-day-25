import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Users() {
    
  const [user,setUser]=useState([]);
  const[isloading, setLoading]=useState(false);

 


useEffect(()=>{              
  loadData();
},[]);
 let loadData=async()=>{
    setLoading(true);
    let req= await axios.get("https://6283a4ad92a6a5e462271d0a.mockapi.io/users")
    setUser(req.data)
    setLoading(false);
   
 }
 let userDelete=async(id)=>{
  console.log("hello")
  try{        
   await axios.delete(`https://6283a4ad92a6a5e462271d0a.mockapi.io/users/${id}`)
   loadData();
  }catch(error){
     
   }
  }


  return (
  <>
   <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
    </div>
    {
        isloading?<div class="text-center">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>:<div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                          {/* <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td> */}
                            {
                              user.map((ele,index)=>{
                                return <tr>
                                <td>{index+1}</td>
                                <td>{ele.Name}</td>
                                <td>{ele.Position}</td>
                                <td>{ele.Office}</td>
                                <td>{ele.Age}</td>
                                <td>{ele.Startdate}</td>
                                <td>{ele.salary}</td>
                             <td>  
                           <Link to={`/portal/users/${ele.id}`}  type="button" class="btn m-1 btn-primary">View</Link>
                            <Link to={`/portal/users/edit/${ele.id}`} type="button"  class="m-1 btn btn-warning">Edit</Link>
                           <button onClick={()=>{userDelete(ele.id)}} type="button" class=" m-1 btn btn-danger">Delete</button>
                           </td>
                           </tr>
                                
                              })
                   }
                           
    
                        
    
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
    }
</div>
</>
  )
}

export default Users;