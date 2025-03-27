import React from 'react'
import './App.css';
import ProtectedRoute from "./protectedRoutes/ProtectedRoute"
import CatogerList from './Components/CategoryList/Index';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Index';
import Home from "./Pages/HomePage"
import ProductList from "./Pages/ProductPPage/index"
import Rejister from './Pages/RejisterPage';
import LoginPage from "./Pages/LoginPage";
import Demo from "./Pages/RejisterPage/demo"
import ProductDetailPage from './Pages/ProductDetailpage';
import About  from "./Pages/AboutPage";
import Cart from "./Pages/CartPage/Index"
import  Contact  from "./Pages/ContactPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProtectedRoute Component={Home} />}/>
      <Route path='/products' element={<ProtectedRoute Component={ProductList} />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/about' element={<ProtectedRoute Component={About} />}/>
      <Route path='/cart' element={<ProtectedRoute Component={Cart} />}/>
      <Route path='/contact' element={<ProtectedRoute Component={Contact} />}/>
      <Route path='/register' element={<Rejister />}/>

      <Route path='/products/detail/:id' element={<ProtectedRoute Component={ProductDetailPage} />}/>
     
    </Routes>
    </BrowserRouter>

    // <div>
    //   {/* <Navbar />
    //   <Header/>
    //   <ProductList />
    //   <CatogerList /> */}
    //   {/* <Rejister /> */}
    //   {/* <LoginPage /> */}
    //   <Demo />
    // </div>
  )
}

export default App