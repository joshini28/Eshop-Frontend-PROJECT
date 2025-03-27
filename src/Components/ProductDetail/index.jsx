import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import apiClient from '../../Client/ApiClient';
const Index = (props) => {
    console.log(props)
    const {id,getCart}=props;
    console.log(id);
    
 
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            apiClient.get(`/category/1/products/${id}`)
            .then((response)=>{
                SetProducts(response.data)
                console.log(response.data);
                
            })
            .catch((error)=>console.log(error))
            // const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            // SetProducts(response.data)
            // console.log(response.data)

            //    await  axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            //     .then((response)=>SetProducts(response.data))
            //     .catch((error)=>console.log(error))
            //     console.log(products)
        };
        getProducts();




    }, [id]);
    const senddata = () => {
        getCart(id)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <div className={styles.wrapper} >
                        <img src={products.image} className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>{products.name}</h5>
                    {/* <p>{products.price}</p> */}
                    <span>₹ {products.price}</span><br></br>
                    <button type='button' className='btn btn-primary'>buy Now</button>
                    <button type='button' className='btn btn-primary m-2' onClick={senddata}>Add to cart</button>
                </div>
            </div>
            </div>
    )
}

export default Index