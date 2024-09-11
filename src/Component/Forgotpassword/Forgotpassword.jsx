import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import forgotpasswordimage from '../../assets/forgotpassword.png';
import 'react-modern-drawer/dist/index.css';
import './Forgotpassword.scss';
import { IoClose } from "react-icons/io5";
import MyContext from '../../Common/Context/Mycontext';

const Forgotpassword = () => {
  const { Navigte } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(true); 
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch("http://localhost:9000/forgotpassword", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        resetForm();
      }
    },
  });

  const handleClose = () => {
    setIsOpen(false); 
  };

  return (
    <>
      {!sessionStorage.getItem('token') ? (
        isOpen && ( 
          <div className='forgotpassword'>
            <div className="forgotpassword-overlay"></div>
            <div className="forgotpasswordform">
              <div className="forgotpasswordhead">
                <span onClick={handleClose}><IoClose /></span>  
                <h1>Forgot Password</h1>
              </div>

              <div className="forgotpasswordimage">
                <img src={forgotpasswordimage} alt="Forgot Password" />
              </div>

              <form onSubmit={formik.handleSubmit}>
                <p style={{color:"black",fontSize:"25px",textAlign:"left",fontFamily:"arial"}}>
                  Enter your email and we'll send a link to reset your password
                </p>
                <TextField 
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email} 
                  label="Email" 
                  variant="outlined"
                  style={{marginLeft:"110px",marginTop:"20px",width:"310px"}}
                />
                <br />
                <div className="forgotpasswordbutton">
                  <Button variant="contained" type='submit'>Reset Password</Button>
                </div>
              </form>
            </div>
          </div>
        )
      ) : (
        Navigte('/')
      )}
    </>
  );
};

export default Forgotpassword;
