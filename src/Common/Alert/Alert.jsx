import React, { useContext, useEffect } from 'react'
import './Alert.scss'
import { IoAlertCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import MyContext from '../Context/Mycontext';

const Alert = () => {
    const {alert,setAlert,message} = useContext(MyContext)

    useEffect(() =>{
        if(alert){
            setTimeout(() => {
                setAlert(false)

            }, 3000);
        }
    },[setAlert,alert])  //dependency
  return (
    <>
    { alert && <div class="alert" 
    style={{backgroundColor:message.match('Thank You') && 'green'}}>
   {message.match('Thank You') ? <TiTick /> :
   <IoAlertCircleOutline />
   }
   {message}
  </div>}
  </>
  )
}

export default Alert
