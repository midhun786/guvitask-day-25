
import { useFormik } from "formik";
import Product from "./product";
import axios from 'axios';
import { env } from "../config";
function Createprod() {
   
   const formik=useFormik({
     initialValues:{
        Product:"",
        Price:"",
        AvailableTime:"",
        Hotel:"",
        City:"",
     },
     validate:(values)=>{
        let errors={}
         if(values.Product===""){
            errors.Product="please enter products"
         }
         if(values.Price===""){
            errors.Price="please enter price"
         }
         if(values.AvailableTime===""){
            errors.AvailableTime="please enter AvailableTime"
         }
         if(values.Hotel===""){
            errors.Hotel="please enter Hotel"
         }
         if(values.City===""){
            errors.City="please enter City"
         }

        return errors;
     },
     onSubmit:async(values)=>{
       let pro= await axios.post(`${env.api}/product`,values)
      //  console.log(pro.data)
       if(pro){
        alert("product submitted successfully")
       }
     },
});

return (
    <form onSubmit={formik.handleSubmit}>
        <h2 className="d-flex justify-content-center"> Create Product-Form</h2>
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

export default Createprod;
