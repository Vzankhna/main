import React from 'react'
import './Footer.scss'
import footerlogo from '../../assets/Oasis.png'
import { BsArrowUpShort } from "react-icons/bs";



const Footer = () => {
  return (
    <div className="footer">
        <div className="footerlogo">
            <img src={footerlogo} alt="" />
            <p>Home / Blog / Sale / About Us /</p>
        </div>
        <div className="contactus">
            <p style={{color:"#FFFFFF"}}>Contact Us</p>
            <p>+1 999 888-76-54</p>
            <p>E-mail</p>
            <p>hello@logoipsum.com</p>
        </div>
        <div className="address">
            <p>ADDRESS</p>
            <p>2118 Thornridge Cir.Syracuse,Connecticut,35624</p>
            <p>OPENING HOURS</p>
            <p>9AM-6PM</p>
        </div>
        <div className="down">
        <BsArrowUpShort style={{backgroundColor:"white",color:"black",borderRadius:"100%",width:"56px",height:"56px"}}/>
        <p>© 2023 — Copyright</p>
        </div>
    </div>
  )
}

export default Footer
