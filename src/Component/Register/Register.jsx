import React, { useContext, useEffect} from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import registerimage from '../../assets/bedroom.png'
import 'react-modern-drawer/dist/index.css'
import './Register.scss'
import { IoClose } from "react-icons/io5";
import MyContext from '../../Common/Context/Mycontext'

const Register = ({onClose}) => {
  const {setAlert,setMessage,setLoad,Navigate} = useContext(MyContext)

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

const formik = useFormik({
initialValues: {
email: '',
password: '',

},
validationSchema:yup.object({
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),

  password: yup
  .string('Enter your password')
  .required('Password is required')
   
  }),
  onSubmit: async(values,{resetForm}) => {
    setLoad(true)
    const response = await fetch("http://localhost:9000/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(values)
    })
    
    const data = await response.json()
    if(data.li==='true'){
      setAlert(true)
      setMessage(data.message)
      Navigate('/login')
      resetForm()
    }else{
     setAlert(true)
     setMessage(data.error)
    }
    setLoad(false)
    },
});
return (
<>

  <div className='register'>
  <div className="register-overlay" onClick={onClose}></div>
  <div className="registerform">
    <div className="registerhead">
  <span onClick={onClose} style={{cursor:"pointer"}}><IoClose/></span>  
  <h1>Create an Account</h1>
  </div>

  <div className="registerimage">
        <img src={registerimage} alt="" />
    </div>

<form onSubmit={formik.handleSubmit}>

  <p style={{color:"black",fontSize:"25px",textAlign:"center",fontFamily:"arial",marginBottom:"20px"}}>Let's get your account set up</p>

    
  <TextField
  id="email"
  name="email"
  value={formik.values.email}
  onChange={formik.handleChange}
  error={formik.touched.email && Boolean(formik.errors.email)}
  helperText={formik.touched.email && formik.errors.email} 
  label="Email" 
  variant="outlined"
  style={{marginLeft:"130px",width:"320px"}}/> <br /> <br />

  <TextField
  id="password"
  name="password"
  value={formik.values.password}
  onChange={formik.handleChange}
  error={formik.touched.password && Boolean(formik.errors.password)}
  helperText={formik.touched.password && formik.errors.password} 
  label="Password" 
  autoComplete="current-password"
  type="password"
  variant="outlined"
  style={{marginLeft:"130px",width:"320px"}}/> <br /> <br />

<div className="registerbutton">
<Button variant="contained" type='submit'>Create Account</Button>
</div>
<div className="tc">
    <input type="checkbox" style={{cursor:"pointer"}} />
    I agree to the Terms and Conditions of Furniture and acknowledge the Privacy Policy

    <p style={{marginTop:"10px",textAlign:"center",marginRight:"70px"}}>Already have an account? <a href='login' style={{color:"#7C71DF",cursor:"pointer"}} onClick={()=>Navigate('/login')}>Login</a></p>
</div>
</form>
</div>
</div>
  </>
)
}

export default Register;