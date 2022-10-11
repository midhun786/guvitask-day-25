import axios from 'axios';
import React, { useEffect, useState } from 'react'                                    
import { useParams } from 'react-router-dom';               
import { env } from './config';

function Userview() {                                      
  
     const params =useParams();      //Alhamdullilah                 
     console.log(params.userviewid); 
     const [userData, setUserData]=useState({});
   
     useEffect(()=>{                                                                                                                                                                                                                                                                                         
      Loaduser();       
    },[])                                       

     let Loaduser=async()=>{   
    try{  
      
     let user= await axios.get(`${env.api}/user/${params.userviewid}`,{
        headers:{
            authorisation:window.localStorage.getItem("app-token")
          }
     })
      setUserData(user.data)   
    
     }catch(error){     
          
     }     
     }     
    return (         
        <>                                                                
         <h3>{`Name:${userData.Name}`}</h3>   
         <h3>{`Position:${userData.Position}`}</h3> 
         <h3>{`Office:${userData.Office}`}</h3>  
         <h3>{`Age:${userData.Age}`}</h3>     
         <h3>{`StartDate:${userData.Startdate}`}</h3>  
         <h3>{`Salary:${userData.Salary}`}</h3>                
         </>                      
                                                  
     )
    // const [timer,setTimer]= useState(0);
    // useEffect(()=>{
    //     console.log("hello");
    //     let sum = fetch ("https://6283a4ad92a6a5e462271d0a.mockapi.io/users")
    //  .then(()=>{console.log(sum)})
    // },[])
   
    // useEffect(()=>{
    //    console.log('timer update')
    // },[timer])

    // useEffect(()=>{
    //     console.log('destroy')
    // })

    // return(
    //    <>
    //    <button onClick={()=>setTimer(timer+1)}>+</button>
    //    <span>{timer}</span>
    //    <button onClick={()=>setTimer(timer-1)}>-</button>
    //    </>
    // )
}                                                                           
  
export default Userview;                                                              