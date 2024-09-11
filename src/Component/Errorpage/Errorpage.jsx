import React from 'react'
import './Errorpage.scss'
import error from '../../assets/Error.png'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
    const navigate = useNavigate()
  return (
<div class="main">
<div class="left">
        <h1>You are in wrong page</h1>
            <button onClick={()=>navigate('/')}>Go To Home</button>
        </div>
        <div class="right">
            <img src={error} alt="" />
        </div>
</div>
  )
}

export default Errorpage
