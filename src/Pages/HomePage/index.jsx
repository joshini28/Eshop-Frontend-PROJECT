import CategoryList from '../../Components/CategoryList/Index'
import Navbar from '../../Components/Navbar/index'
import Header from '../../Components/Header/Index'
import { useState } from 'react'

const HomePage = () => {
    
    return(
        <>
            <Navbar />
            <Header />
            <CategoryList  />
        </>
    )
}
export default HomePage;