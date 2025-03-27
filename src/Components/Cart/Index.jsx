import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import axios from 'axios'
import CardDetail from "./CartDetails/Index"
const Index = () => {
  
   const[products,SetProducts]=useState([]);
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("cart"))||[]
    const getproduct=async()=>{
      const allCartData=data.map(async(data)=>{
        
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${data}`)
        return response.data
       
      })
      const FetchAllData = await Promise.all(allCartData)
      SetProducts(FetchAllData)
    }
    getproduct()
    // console.log(products)
    
  },[])
  // console.log(products)
  return (<div>
{products.map((product)=>(
  <CardDetail product={product}/>
))}
      </div>
     
  
  )
}

export default Index