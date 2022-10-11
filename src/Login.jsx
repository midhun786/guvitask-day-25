import axios from 'axios';
import { Button } from 'bootstrap';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { env } from './config';
import UserContext from './Usercontext';

function Login() {
    let context=useContext(UserContext);
    let navigate = useNavigate();
  //   let username = "abc";
  //   let pass = "123";
  //   let login = () => {
  //     if (username == "abc" && pass == "123") {
  //         navigate("/portal/dashboard");
  //     } else {
  //       alert("Worng data");
  //     }
  //   };
  
    let formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validate: (values) => {
        let errors = {};
       
        if (values.email === "") {
          errors.email= "Please enter email"
        }
        if (values.password === "") {
          errors.password = "Please enter password"
        }
        
        return errors;
      }, 
     
      onSubmit: async (values) => {
        try {
         let loginData= await axios.post(`${env.api}/login`, values);
         console.log(loginData)
        
         if(loginData.data.token){
  
          if(loginData.status === 200){
            navigate("/portal/dashboard");
            window.localStorage.setItem("app-token",loginData.data.token)
        }
        }else{
          console.log(loginData.data.message)
         }
   
        } catch (error) {
          // alert(error.response.data.message)
          console.log(error);
        }
      },
  
    });
    return (
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 mx-auto">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome To Login Page!</h1>
                      </div>
                      <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">      
                          <input
                            className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                            id="exampleInputEmail"
                            type={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            placeholder="Enter Email Address..."
                          />
                           <span style={{ color: "red" }}>{formik.errors.email}</span>
                        </div>
                        <div className="form-group">
                          <input
                           className={`form-control ${formik.errors.password ? `input-error` : ``}`}
                            id="exampleInputPassword"
                            type={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Password"
                            name="password"
                          />
                          <span style={{ color: "red" }}>{formik.errors.password}</span>
                        </div>
                        <div className="form-group">
                         
                         
                          <div className='text-end  fw-bold '>
                     <Link to={'/forgotpassword'} className=' '>Forgot password</Link>
                      
                      </div>
                        </div>
  
                        <button
                          type="submit"
                          className="btn btn-primary btn-user fw-bold btn-block"
                        >
                         LOGIN
                        </button>
                      </form>
                     <div>for login please enter below (practice on progress) </div> <br/>
                      email:person1@gmail.com;<br/>
                      password:admin123;
                      <div className='text-center p-3 fw-bold mt-2'>
                      <p>Don't have an Account? <Link to={'/register'} className='btn btn-outline-info'>Register</Link></p>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  