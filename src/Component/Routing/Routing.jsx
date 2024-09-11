import React from 'react'
import './Routing.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Home from '../Home/Home';
import Errorpage from '../Errorpage/Errorpage';
import Mycontextprovider from '../../Common/Context/Mycontextprovider';
import Service from '../Service/Service';
import Product from '../Product/Product';
import Loader from '../../Common/Loader/Loader'
import Alert from '../../Common/Alert/Alert'
import Singleproduct from '../Singleproduct/Singleproduct';
import Account from '../Accountdetails/Accountdetails';
import Logout from '../Logout/Logout';
import Cart from '../Cart/Cart';
import Homedecoration from '../Homedecoration/Homedecoration';
import Forgotpassword from '../Forgotpassword/Forgotpassword';
import Changepassword from '../Changepassword/Changepassword';
import Orderconfirm from '../Orderconfirm/Orderconfirm';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import Checkout from '../Checkout/Checkout'


const Routing = () => {


  return (
    <div>
        <BrowserRouter>
        <Mycontextprovider>
          <Logout/>
          <Loader/>
          <Alert/>
       
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='*' element={<Errorpage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/category/:product' element={<Product/>}/>
          <Route path='/category/:product/:singleproduct' element={<Singleproduct/>}/>
          <Route path='/accountdetails' element={<Account/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/homedecoration' element={<Homedecoration/>}/>
          <Route path='/forgotpassword' element={<Forgotpassword/>}/>
          <Route path='/changepassword' element={<Changepassword/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/orderconfirm' element={<Orderconfirm/>}/>
          <Route path='/blog' element={<Blog/>}/>

        </Routes>
        </Mycontextprovider>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Routing