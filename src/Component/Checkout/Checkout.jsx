import React, { useEffect, useContext } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'react-modern-drawer/dist/index.css';
import './Checkout.scss';
import { IoClose } from "react-icons/io5";
import MyContext from '../../Common/Context/Mycontext';

const Checkout = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const { token, setShipping, setLoad, setAlert, setMessage, Navigate } = useContext(MyContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstname:'',
      lastname:'',
      mobile:'',
      address:'',
      city:'',
      country:'',
    },
    validationSchema: yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      firstname: yup
        .string('Enter your firstname')
        .required('First name is required'),
      lastname: yup
        .string('Enter your lastname')
        .required('Last name is required'),
      mobile: yup
        .string('Enter your contact number')
        .min(10, 'Enter a valid contact number')
        .required('Contact number is required'),
      address: yup
        .string('Enter your address')
        .required('Address is required'),
      city: yup
        .string('Enter your city')
        .required('City is required'),
      country: yup
        .string('Enter your country')
        .required('Country is required'),
    }),
    onSubmit: async (values) => {
      setLoad(true);
      const response = await fetch('http://localhost:9000/save-shipping-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        setAlert(true);
        setMessage(data.message);
        setShipping(data.shippingInfo);
        sessionStorage.setItem('shipping', JSON.stringify(data.shippingInfo));
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setAlert(true);
        setMessage(data.error);
      }
      setLoad(false);
    },
  });

  return (
    <>
      {!sessionStorage.getItem('token') ? (
        <div className='checkout'>
          <div className="checkout-overlay" onClick={onClose}></div>
          <div className="checkoutform">
            <div className="checkouthead">
              <span onClick={onClose}><IoClose /></span>
              <h1>Checkout</h1>
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
                id="firstname"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname} 
                label="Firstname" 
                variant="outlined"
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />

              <TextField
                id="lastname"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname} 
                label="lastname" 
                variant="outlined"
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />

              <TextField
                id="mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile} 
                label="mobile" 
                variant="outlined"
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />

              <TextField
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address} 
                label="address" 
                variant="outlined"
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />

              <TextField
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city} 
                label="city" 
                variant="outlined"
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />

              <TextField
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country} 
                label="country" 
                variant="outlined"
                style={{ marginLeft: "100px", width: "340px", marginTop: "20px" }}
              /> <br /> <br />              



              <div className="checkoutbutton">
                <Button variant="contained" type='submit' onClick={()=>Navigate('/orderconfirm')}>Checkout</Button>
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

export default Checkout;
