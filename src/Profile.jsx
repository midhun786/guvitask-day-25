import React, { useState } from 'react'
import { useContext } from 'react';
import UserContext from './Usercontext';

function Profile() {
    let context=useContext(UserContext)

    let [name,setName]=useState("");

  let changeProfile=()=>{
   context.setUsername(name)
    
  }


  return (
    <>
    <div className="container d-flex justify-content-center">
        <div className='row  col-lg-6'>
    <div className="mb-3">
  <label  className="form-label">UserName</label>
  <input type={"text"} class="form-control" value={name} onChange={(event)=>{setName(event.target.value)}}/>
  <button onClick={changeProfile} class="mt-4 btn btn-warning">save</button>

</div>
</div>
</div>
</>
  )
}

export default Profile