import { useFormik } from "formik";
import React from "react";
import axios from 'axios';


function Createuser() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Position: "",
      Office: "",
      Age: "",
      Startdate: "",
      Salary: "",
    },
    validate:(value)=>{
       let errors={};
         if(value.Name===""){
          errors.Name="please enter your name"
         }
        if(value.Position===""){
          errors.Position="please enter position"
        }
        if(value.Office===""){
          errors.Office="Please enter office"
        }
        if(value.Age===""){
          errors.Age="please enter your Age"
        }
        if(value.Startdate===""){
          errors.Startdate="please enter startdate"
        }
        if(value.Salary===""){
          errors.Salary="please enter your salary"
        }

       return errors;
    },
    onSubmit:async(values)=>{
      let req= await axios.post("https://6283a4ad92a6a5e462271d0a.mockapi.io/users",values)
      console.log(req);
      alert("user created")
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input
            className={"form-control"}
            type={"text"}
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
          />
          <span style={{color:"red"}}>{formik.errors.Name}</span>
        </div>
        <div className="col-lg-6">
          <label>Position</label>
          <input className="form-control" type={"text"}
           value={formik.values.Position}
           onChange={formik.handleChange}
           name="Position"
          />
         <span style={{color:"red"}}>{formik.errors.Position}</span>
        </div>
        <div className="col-lg-6">
          <label>Office</label>
          <input className="form-control" type={"text"}
           value={formik.values.Office}
           onChange={formik.handleChange}
           name="Office"
          />
          <span style={{color:"red"}}>{formik.errors.Office}</span>
        </div>
        <div className="col-lg-6">
          <label>Age</label>
          <input className="form-control" type={"text"}
           value={formik.values.Age}
           onChange={formik.handleChange}
           name="Age"
          />
        <span style={{color:"red"}}>{formik.errors.Age}</span>
        </div>
        <div className="col-lg-6">
          <label>Startdate</label>
          <input className="form-control" type={"text"}
          value={formik.values.Startdate}
          onChange={formik.handleChange}
          name="Startdate"
          />
        <span style={{color:"red"}}>{formik.errors.Startdate}</span>
        </div>
        <div className="col-lg-6">
          <label>Salary</label>
          <input className="form-control"
          type={"text"}
          value={formik.values.Salary}
          onChange={formik.handleChange}
          name="Salary"
          />
          <span style={{color:"red"}}>{formik.errors.Salary}</span>
        </div>
        <button type={"submit"} 
        classNameName="btn btn-primary ms-3 mt-3 col-lg-1"
        disabled={formik.isValid?false:true}
        >
          Submit
        </button>
      </div>
    </div>
    </form>
  );
}

export default Createuser;
