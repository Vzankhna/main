import React, { useContext } from 'react'
import './Create.scss'
import { HiHome } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import MyContext from '../../Common/Context/Mycontext';

const Create = () => {
  const{setShow,setCreate,Navigate}=useContext(MyContext)

  const handlekp = () =>{
    setCreate(false)
    setShow(true)
  }
  return (
    <>
    <div className='create'>
      <span onClick={()=>Navigate('/')}><HiHome/>Home</span>
      <span onClick={() =>window.location.href='/accountdetails'}><FaRegUserCircle/>Account Details</span>
      <span onClick={()=>window.location.href='/checkout'}><MdOutlineLocalShipping/>Shipping Details</span>
      <span onClick={handlekp}><CiLogout/>Logout</span>          
    </div>
  
    </>
  )
}

export default Create
