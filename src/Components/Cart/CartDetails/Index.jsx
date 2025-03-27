import React from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {
    const {title,price,category,images,id}=props.product;
    console.log(props.product)
  return (
    <div className="col-sm-3 ">
        
        <h3>{title}</h3>
        <div class="card" style={{width: "18rem"}}>
    <img class="card-img-top" src={images} alt="Card image cap" />
    <div class="card-body">

      <h5>Rs. {price}</h5>
      <Link to={"detail/"+id} className='btn btn-primary'>Show detail</Link>
    </div>
  </div>
      </div>
    )
  
}

export default Index