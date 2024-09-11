import React, { useContext } from 'react'
import './Logoutmenu.scss'
import { HiHome } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import MyContext from '../../Common/Context/Mycontext';

const Logoutmenu = () => {
  const{setShow,setCreate}=useContext(MyContext)

  const handlekp = () =>{
    setCreate(false)
    setShow(true)
  }
  return (
    <>
    <div className='create'>
      <span><HiHome/>Home</span>
      <span onClick={() =>window.location.href='/account'}><FaRegUserCircle/>Account Details</span>
      <span onClick={()=>window.location.href='/shipping'}><MdOutlineLocalShipping/>Shipping Details</span>
      <span onClick={()=>window.location.href='/orderdetails'}><BsCart4/>Order Details</span>
      <span onClick={handlekp}><CiLogout/>Logout</span>
          
    </div>
  
    </>
  )
}

export default Logoutmenu
