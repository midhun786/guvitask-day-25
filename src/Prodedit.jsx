import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';

function Prodedit() {
    const params=useParams();
    console.log(params.id);
    
    const navigate=useNavigate();
  
    const formik=useFormik({
     initialValues:{   
      Product:"",       
      Price:"", 
      AvailableTime:"",
      Hotel:"",
      City:"",
     },
     validate:(value)=>{   
       let errors={};     
         if(value.Product===""){   
          errors.Product="please enter product name"
         }
         if(value.Price===""){
          errors.Price="please enter price"
         }
         if(value.AvailableTime===""){ 
          errors.AvailableTime="please enter AvailableTime"
         }
         if(value.Hotel===""){
          errors.Hotel="please enter Hotel"
         }
         if(value.City===""){
          errors.City="please enter City"
         }
       return errors;
     },
     onSubmit:async(value)=>{
       let submit=await axios.put(`https://6283a4ad92a6a5e462271d0a.mockapi.io/product/${params.id}`,value)
       console.log(submit.data);
      //  alert("product updated");
       navigate("/portal/products")
     },
  });
  useEffect(()=>{
   Loadedit();
  },[])

   let Loadedit=async()=>{
    try{
    let edit = await axios.get(`https://6283a4ad92a6a5e462271d0a.mockapi.io/product/${params.id}`)
    console.log(edit.data);
    formik.setValues({
       Product :edit.data.Product,
       Price: edit.data.Price,
       AvailableTime: edit.data.AvailableTime,
       Hotel: edit.data.Hotel,
       City: edit.data.City,

    })
    }catch(errors){

    }
   }



 return (  
    <form onSubmit={formik.handleSubmit}>
    <h2 className="d-flex justify-content-center">Product Edit-Form</h2>
<div className="container">
  <div className="row">
   
    <div className="col-lg-6">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Product Name
        </label>
        <input type={"text"} className="form-control" 
        value={formik.values.Product} 
        onChange={formik.handleChange}
        name="Product"
        />
        <span style={{color:"red"}}>{formik.errors.Product}</span>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Price
        </label>
        <input type={"text"} className="form-control"
        value={formik.values.Price}
        onChange={formik.handleChange}
        name="Price"
        />
        <span style={{color:"red"}}>{formik.errors.Price}</span>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          AvailableTime
        </label>
        <input type={"text"} className="form-control"
          value={formik.values.AvailableTime}
          onChange={formik.handleChange}
          name="AvailableTime"
        />
         <span style={{color:"red"}}>{formik.errors.AvailableTime}</span>
      </div>
    </div>
    
    <div className="col-lg-6">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Hotel
        </label>
        <input type={"text"} className="form-control"
        value={formik.values.Hotel}
        onChange={formik.handleChange}
        name="Hotel"
        />
         <span style={{color:"red"}}>{formik.errors.Hotel}</span>
      </div>
    </div>
    
    <div className="col-lg-6">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          City
        </label>
        <input type={"text"} className="form-control"
        value={formik.values.City}
        onChange={formik.handleChange}
        name="City"
        />
         <span style={{color:"red"}}>{formik.errors.City}</span>
      </div>
    </div>
    
    <div className="container">  
      <div className="row">   
        <button type={"submit"} className="col-lg-1 col-sm-12 m-2 btn btn-primary"
        disabled={formik.isValid?false:true}>   
          Submit      
        </button>     
      </div>
    </div>

  </div>
</div>
</form>
);
}

export default Prodedit;