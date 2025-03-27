import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ProductDetail from "../../Components/ProductDetail";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [cart, Setcart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || []; // Load from localStorage
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage on change
    }, [cart]);

    const getvalue = (cartvalue) => {
        console.log("cartvalue")
        Setcart([...cart, cartvalue]); // Keep old values
    };

    return (
        <>
            <Navbar cart={cart} />
            <br />
            <ProductDetail id={id} getCart={getvalue} />
        </>
    );
};

export default ProductDetailPage;
