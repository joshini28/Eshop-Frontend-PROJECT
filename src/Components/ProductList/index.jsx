import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  Product from "./Product"
import apiClient from '../../Client/ApiClient';
const Index = ({cart}) => {
    const[products,SetProducts]=useState([]);
    const getProducts=()=>{
        
        apiClient.get(`/category/1/products`)
        
        .then((response)=>{
         SetProducts(response.data)})
        .catch((error)=>console.log(error))
    };
    useEffect(()=>{
        getProducts();
        
    },[]);
    useEffect(()=>{
        // console.log(products)
        
    },[products]);
   
  return (
    <div className="container">
        
        <h2 className="text-center">All products</h2>
        <div className='row'>
            {
                products.map((product,index)=>(
                    <Product key={index} data={product}
                    
                    />
                ))
            }
            {/* {console.log(products)} */}
        </div>
    </div>
  )
}

export default Index;