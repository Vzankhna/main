import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Changepassword.scss'
import MyContext from '../../Common/Context/Mycontext';


const Changepassword = () => {
  const{setLoad} = useContext(MyContext)
const formik = useFormik({
initialValues: {
email: '',
password:''

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
onSubmit:async (values,{resetForm}) => {
setLoad(true)
const response = await fetch ("http://localhost:9000/changepassword",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
});

const data =await response.json()
if(data.success){
  alert(data.message)
  resetForm()
  setLoad(false)
  window.location.href='/login'
}

},
});
return (
<>
  
  <div className='change'>

  <div className="changepasswordform">
  <h1>Change Password</h1>


<form onSubmit={formik.handleSubmit}>

  <div className="textfield">

<TextField 
id="email"
name="email"

value={formik.values.email}
onChange={formik.handleChange}
error={formik.touched.email && Boolean(formik.errors.email)}
helperText={formik.touched.email && formik.errors.email} 
label="Email" 
variant="outlined" /> <br />

<TextField  
id="password"
name="password"

value={formik.values.password}
onChange={formik.handleChange}
error={formik.touched.password && Boolean(formik.errors.password)}
helperText={formik.touched.password && formik.errors.password}
label="New Password"
type="password"
autoComplete="current-password"
variant="outlined"/> <br />


<Button variant="contained" type='submit'>Submit</Button>

</div>
</form>

</div>
</div>
  
  </> 
)
}

export default Changepassword;