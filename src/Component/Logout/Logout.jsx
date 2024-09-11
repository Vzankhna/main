import React, { useContext } from 'react'
import './Logout.scss'
import MyContext from '../../Common/Context/Mycontext'

const Logout = () => {
    const {handlelogout,setShow,show} = useContext(MyContext)
  return (
    <>
    {show &&
    <div className="mod">
        <div className="conte">
            <p>Are you sure you want to logout?</p><br />
            <button onClick={handlelogout} style={{height:"40px",width:"80px",margin:"10px",cursor:"pointer",backgroundColor:"black",color:"white"}}>Yes</button>
            <button onClick={() => setShow(false)} style={{height:"40px",width:"80px",margin:"10px",cursor:"pointer",backgroundColor:"black",color:"white"}}>No</button>
        </div>
    </div>

    }
    </>
  )
}

export default Logout
