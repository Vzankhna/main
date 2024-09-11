import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import 'react-modern-drawer/dist/index.css'
import orderconfirm from '../../assets/orderconfirm.png'
import './Orderconfirm.scss'
import { IoClose } from "react-icons/io5";
import MyContext from '../../Common/Context/Mycontext';

const Orderconfirm = ({onClose}) => {
  const {Navigate} = useContext(MyContext)
    return (
        <>
        
          <div className='orderconfirm'>
          <div className="orderconfirm-overlay" onClick={onClose}></div>
          <div className="orderconfirmform">
            <div className="orderconfirmhead">
          <span onClick={onClose}><IoClose/></span>  
          <h1>orderconfirm </h1>
          </div>
        
          <div className="orderconfirmimage">
                <img src={orderconfirm} alt="" />
            </div>
            <div className="paytext">
                <p>Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!</p>
            </div>
            <div className="orderconfirmbutton">
        <Button variant="contained" type='submit' onClick={()=> Navigate('/')}>Done</Button>
        </div>
        </div>
        </div>
          </>
        )
}

export default Orderconfirm;