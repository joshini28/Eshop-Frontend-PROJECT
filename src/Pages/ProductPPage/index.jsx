import { useState } from "react"
import Navbar from "../../Components/Navbar/index"
import ProductList from "../../Components/ProductList"

const ProductPage = () => {
    // const [cart,Setcart]=useState([0])
    // const getvalue=(cartvalue)=>{
    //     Setcart(cartvalue)}
    return(
        <div>
            <Navbar />
            <ProductList 
            // cart={getvalue}
            />
            </div>
    )
}
export default ProductPage;