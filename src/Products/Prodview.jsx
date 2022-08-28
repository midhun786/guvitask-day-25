import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Prodview() {
    const params=useParams();
    console.log(params.id);

    const[view, setView]=useState({});

    useEffect(()=>{
        Loadview();
    },[]);
    let Loadview=async()=>{
        let view= await axios.get(`https://6283a4ad92a6a5e462271d0a.mockapi.io/product/${params.id}`)
        setView(view.data);
    }

  return (
    <>
    <h1 class="container-fluid">ProductView:-({params.id})</h1>
    <div class="container offset-4 mt-5">
        
    <h2>Name: {view.Product}</h2>
    <h2>Price:{view.Price}</h2>
    <h2>AvailableTime:{view.AvailableTime}`</h2>
    <h2>Hotel:{view.Hotel}</h2>
    <h2>City:{view.City}</h2>
    </div>
    </>
  )
}

export default Prodview;