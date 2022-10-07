import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { env } from '../config';

function Product() {
  
//  const data=[
//     {
//   id:1,
//   Product:"briyani",
//   Price:"160",
//   Available:"2.30p.m",
//   Hotel:"yamohideen",
//   City:"chennai",

//  },
//  {
//     id:2,
//     Product:"dosa",
//     Price:"160",
//     Available:"8.30p.m",
//     Hotel:"adyar bhavan",
//     City:"chennai",
  
//    }
// ]
 const [data,setData]=useState([]);
    useEffect(()=>{
      Loaddata();
      
    },[])
    let Loaddata= async()=>{
        let user= await axios.get(`${env.api}/products`)
        setData(user.data)
    }

    let prodDelete=async(identity)=>{
    try{
        let ask=window.confirm("Are you sure want to Delete")
      if(ask){
          await axios.delete(`${env.api}/prodelete/${identity}`)
        Loaddata();
      }
    }catch(errors){
           console.log(errors)
       }
    } 
    return (
        <>
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Product</h1>
              <Link to="/portal/create-product" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
          </div>
          <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
              </div>
              <div className="card-body">
                  <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                          <thead>
                              <tr>
                                  <th>S.No</th>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>AvailableTime</th>
                                  <th>Hotel</th>
                                  <th>City</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tfoot>
                              <tr>
                                  <th>S.No</th>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>AvailableTime</th>
                                  <th>Hotel</th>
                                  <th>City</th>
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
                                data.map((ele,index)=>{
                                  return <tr>
                                    <td>{index+1}</td>
                                    <td>{ele.Product}</td>
                                    <td>{ele.Price}</td>
                                    <td>{ele.AvailableTime}</td>
                                    <td>{ele.Hotel}</td>
                                    <td>{ele.City}</td>
                                    <td>
                                    <Link to={`/portal/prodview/${ele._id}`} type="button" className="btn btn-secondary">View</Link>
                                    <Link to={`/portal/prodedit/${ele._id}`} type="button" className="btn btn-info m-2">Edit</Link>
                                    <button onClick={()=>{prodDelete(ele._id)}} type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                    </tr> 

                                })
                            }
                                 
          
                              
          
                          </tbody>
                          
                      </table>
                  </div>
              </div>
          </div>
          
      </div>
      </>
        )
}

export default Product;