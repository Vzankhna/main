import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import loginimage from '../../assets/login.png';
import 'react-modern-drawer/dist/index.css';
import './Login.scss';
import { IoClose } from "react-icons/io5";
import MyContext from '../../Common/Context/Mycontext';

const Login = () => {
  const { Navigate, setAlert, setCart, setToken, setMessage, setLoad } = useContext(MyContext);
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
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string('Enter your password')
        .required('Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoad(true);
      const response = await fetch("http://localhost:9000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.success) {
        setAlert(true);
        setMessage(data.message);
        setToken(data.Token);
        sessionStorage.setItem('token', data.Token);
        sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));

        setCart(data.cartInfo);
        resetForm();
        window.location.href = '/';
      } else {
        setAlert(true);
        setMessage(data.error);
      }
      setLoad(false);
    },
  });

  const handleClose = () => {
    setIsOpen(false); 
  };

  return (
    <>
      {!sessionStorage.getItem('token') && isOpen ? (
        <div className='login'>
          <div className="login-overlay"></div>
          <div className="loginform">
            <div className="loginhead">
              <span onClick={handleClose}><IoClose /></span>
              <h1>Login</h1>
            </div>

            <div className="loginimage">
              <img src={loginimage} alt="Login" />
            </div>

            <form onSubmit={formik.handleSubmit}>
              <p style={{ color: "black", fontSize: "25px", textAlign: "center", fontFamily: "arial" }}>
                Welcome Back
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
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />

              <TextField
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                style={{ marginLeft: "100px", width: "340px" }}
              /> <br /> <br />

              <div className="forget">
                <p onClick={() => Navigate('/Forgotpassword')}>Forgot Password?</p>
              </div>

              <div className="loginbutton">
                <Button variant="contained" type='submit'>Login</Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        Navigate('/') 
      )}
    </>
  );
};

export default Login;
