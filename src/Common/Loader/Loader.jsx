import React, { useContext,useEffect } from 'react'
import './Loader.scss'
import MyContext from '../Context/Mycontext'

const Loader = () => {
    const{count,setCount} = useContext(MyContext)
    useEffect(() => {
        setTimeout(() =>{
            setCount(false)
        },3000)
    },[count,setCount])
  return (
<>{    
        count &&
              <div class="loader-main">
              <div class="loader"></div>
            </div>
        
    }
    </>
  )
}

export default Loader
