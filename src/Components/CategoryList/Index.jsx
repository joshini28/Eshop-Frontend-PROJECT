import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Category from './Category'
import apiClient from '../../Client/ApiClient';
const CatogerList = () => {
  const [categories,Setcatogeries] = useState([]);
  const getCatogries=()=>{
    apiClient.get("/category")
   
    .then((response)=>{console.log(response.data);
     Setcatogeries(response.data)})
    .catch(error=>console.log(error))
    
  }
  useEffect(()=>{
    getCatogries();
  },[])
  return (

    <div className="container">
      <h1 className='text-center'>
        CatogeryList
      </h1>
      <div class="row">
        
        {categories.map((category,index)=>(
          <Category data={category} key={index}/>
          
        ))}
        
    

      </div>
      
    </div>
  )
}

export default CatogerList