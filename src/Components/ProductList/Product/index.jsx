import React from 'react'
import { Link } from 'react-router-dom';

function index(props) {
    
    const {name,price,images,id}=props.data;
    
    
    
    return (
      <div className="col-sm-3 ">
        
       
      
        <div class="card" style={{width: "18rem"}}>
          
    <img class="card-img-top" src={images} alt="Card image cap" />
    <div class="card-body">
    <h3>{name}</h3>
      <h5>Rs. {price}</h5>


      <Link to={"detail/"+id} className='btn btn-primary'>Show detail</Link>
    </div>
  </div>
      </div>
    )
}

export default index