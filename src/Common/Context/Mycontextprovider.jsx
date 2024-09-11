import React, { useEffect, useState } from 'react'
import MyContext from './Mycontext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Mycontextprovider = ({children}) => {
  //for Navigation
  const Navigate = useNavigate()
  //loader
  const[count,setCount] = useState(false)
  
  //for Accordian/Service
  const[service,setService] = useState([])

  //logout
  const[show,setShow]=useState(false) 


  //Alert
  const[alert,setAlert]=useState(false)
  const[message,setMessage]=useState('')
  const[load,setLoad]=useState(false)

    //used for the token
    const [token,setToken] = useState(()=>{
      const storedToken = sessionStorage.getItem('token');
      return storedToken? storedToken:''
    }) 

    // for user login start
const handleLogin = (data) =>{

  setMessage(data.loginmessage)
  setToken(data.data)
  sessionStorage.setItem('token',data.data)
  sessionStorage.setItem('userdata', JSON.stringify(data.accountInfo));
  sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
  setUserdata(data.accountInfo)
  setCart(data.cartInfo)
  setAlert(true)
  Navigate('/login')
  }

    //to logout
    const handlelogout = ()=>{  
      if(handlelogout){
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userdata');
        sessionStorage.removeItem('cart');
        window.location.reload()
        setUserdata(null)
        setCart([])
        setToken('')
        Navigate('/')
      }
    }


  //Fetch accordian/service
  useEffect(() => {
    axios.get('http://localhost:9000/accordian')
        .then(response => setService(response.data.data))
},[]);

//login

  const[login,setLogin] = useState(false)

//open register page

const openregister =()=>{
  setLogin(!login)
  }

  //sidemenu

  const[create,setCreate]=useState(false)


//category
const[data,setData] = useState([])

//category data fetch

useEffect(() =>{
  axios.get('http://localhost:9000/category')
  .then(a => setData(a.data.data))

},[])

//for category to product navigate

const handleNavigate = (category) =>{ 
  Navigate(`/category/${category}`)
  }

  const [error, setError] = useState(false);//singleproduct to show an error if you don't select the size
  
  const handlehover = (img) =>{ //change images
    document.getElementById('change').src=img
  }

  //close checkout page
  const[close,setClose] = useState(false)


  //for product to sinngleproduct navigate
  const matchNavigate = (category,product) =>{
    Navigate(`/category/${category}/${product}`)
    }

      //go to cart for show data

  const isProductInCart = (categoryid,productid) => {
    if (cart) {
        return cart.find(item =>item.categoryid===categoryid && item.productid === productid);
    }
    return false;
  };

     //Account-details
    
     const [userdata, setUserdata] = useState(() => {
      const storedUserData = sessionStorage.getItem('userdata');
      return storedUserData? JSON.parse(storedUserData):null
    }); 

//update account-info
const[edit,setEdit]=useState(false)

//add data in cart
const [cart, setCart] = useState(() => {
  const savedCart = sessionStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});

// FOR ADD TO CART PROCESS 
 //to add product in cart
 const handleBuyNowClick =async(categoryid,productid,productimage,productname,productprice) => {

  if(!token){
    setMessage('Please Login First')
    setAlert(true)
    setTimeout(()=>{
      Navigate('/login')
    },(3000));
    return
  }
  setLoad(true)
  const response = await fetch('http://localhost:9000/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({categoryid,productid,productimage,productname,productprice})
  })
  const data = await response.json()
  if(data.success){
   setMessage(data.message)
   sessionStorage.setItem('cart',JSON.stringify(data.cartInfo));
   setCart(data.cartInfo)
   setAlert(true)
  }
  else{
    setMessage(data.error)
    setAlert(true)
  }
  setLoad(false)
};


//to remove product from cart

const removeProductFromCart = async (categoryid,productid) => {
  try {
    setLoad(true)
    const response = await fetch('http://localhost:9000/remove-from-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ categoryid,productid})
    });

    const data = await response.json();
    if(data.success){
      setMessage(data.message)
      sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
      setCart(data.cartInfo)
      setAlert(true)
  
    }else{
      setMessage(data.error)
      setAlert(true)
    }
  } 
  catch (error) {
    console.error('Error removing from cart:', error);
  }
  finally{
    setLoad(false)
  }
};

//increase quantity
const handleIncreaseQuantity = async (categoryid,productid) => {
  try {

    setLoad(true)
    const response = await fetch('http://localhost:9000/increase-quantity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ categoryid,productid })
    });

    const data = await response.json();
    if(data.success){
      setMessage(data.message)
      sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
      setCart(data.cartInfo)
      setAlert(true)
   
    }else{
      setMessage(data.error)
      setAlert(true)
    }
    
  } 
  catch (error) {
    console.error('Error increase quantity from cart:', error);
  }
  finally{
    setLoad(false)
  }
};

//decrease quantity

const handleDecreaseQuantity = async (categoryid,productid) => {
  try {

    setLoad(true)
    const response = await fetch('http://localhost:9000/decrease-quantity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ categoryid,productid })
    });

    const data = await response.json();
    if(data.success){
      setMessage(data.message)
      sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
      setCart(data.cartInfo)
      setAlert(true)
   
    }else{
      setMessage(data.error)
      setAlert(true)
    }
    
  } 
  catch (error) {
    console.error('Error decrease quantity from cart:', error);
  }
  finally{
    setLoad(false)
  }
};

  return (
    <MyContext.Provider value={{close,setClose,isProductInCart,handleBuyNowClick,handleIncreaseQuantity,handleDecreaseQuantity,removeProductFromCart,cart,setCart,userdata,setUserdata,edit,setEdit,show,setShow,create,setCreate,matchNavigate,handlehover,error, setError,handlelogout,handleLogin,token,setToken,alert,setAlert,message,setMessage,load,setLoad,openregister,data,setData,handleNavigate,Navigate,service,setService,count,setCount}}>
        {children}
    </MyContext.Provider>
  )
}

export default Mycontextprovider
