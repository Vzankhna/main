import React, { useContext, useState } from 'react';
import './Header.scss';
import Register from '../Register/Register';
import logo from '../../assets/branding.png';
import { CiShoppingCart } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Logoutmenu from '../Logoutmenu/Logoutmenu';
import MyContext from '../../Common/Context/Mycontext';
import { IoMdArrowDropdownCircle } from "react-icons/io";


const Header = () => {

  const { Navigate, cart, setCreate, create} = useContext(MyContext); 
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" onClick={() => Navigate('/')} />
      </div>
      <div className="center">
        <p onClick={() => Navigate('/')}>Home</p>
        <p onClick={() => Navigate('/product')}>Shop</p>
        <p onClick={() => Navigate('/category')}>Categories</p>
        <p onClick={() => Navigate('/blog')}>Blog</p>
      </div>
      <div className="right">
        <span className='scart' onClick={() => Navigate('/cart')} style={{ cursor: "pointer" }}>
          <CiShoppingCart style={{ color: "#7C71DF", backgroundColor: "#F8F7FB", fontSize: "30px", borderRadius: "100%", padding: "10px" }} />
          <b>{cart && cart.length}</b>
        </span>
        {sessionStorage.getItem('token') ? 
          <span className='arrowname' onClick={() => setCreate(!create)} style={{ cursor: "pointer" }}>
          <IoMdArrowDropdownCircle style={{fontSize:"25px",cursor:"pointer"}}/>
          </span>:
         
          <button onClick={openRegister}>
            Get Started <span style={{ marginLeft: "10px" }}><FaArrowRightLong /></span>
          </button>
        }
        {isRegisterOpen && <Register onClose={closeRegister} />}
      </div>
      {
      create && (
        <Logoutmenu/>
      )}
    </div>
  );
};

export default Header;
