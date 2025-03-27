import React from 'react'

function Index(props) {
    const {id,name,image}=props.data;
    
    
  return (
    <div className="col-sm-3">
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
  </div>
</div>
    </div>
  )
}

export default Index