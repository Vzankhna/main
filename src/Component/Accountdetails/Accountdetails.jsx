import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Accountdetails.scss';
import MyContext from '../../Common/Context/Mycontext';

const Account = () => {
  const {token, edit, setEdit, userdata, setUserdata,load,setLoad, setAlert, setMessage } = useContext(MyContext);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:9000/account-details', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserdata(data.accountInfo);
        sessionStorage.setItem('userdata', JSON.stringify(data.accountInfo));
      } catch (error) {
        console.error('Failed to fetch account details:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchUserData();
  }, [setUserdata, token]);

  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {token ? (
        edit ? (
          <Formik
            initialValues={{
              name: userdata.name || '',
              email: userdata.email || '',
              mobile: userdata.mobile || '',
              password: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Name is required'),
              email: Yup.string().email('Invalid email address').required('Email is required'),
              mobile: Yup.string().required('Mobile number is required'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={async (values) => {
              setLoad(true);
              const response = await fetch('http://localhost:9000/update-account-data', {
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
                setUserdata(data.accountInfo);
                sessionStorage.setItem('userdata', JSON.stringify(data.accountInfo));
                setTimeout(() => {
                  window.location.reload()
                }, 2000);
              } else {
                setAlert(true);
                setMessage(data.error);
              }
              setLoad(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className='name-main'>
                <h2>Update Account Details</h2>
                <div className='name-form'>
                  <div className='name-input'>
                    <label htmlFor="name">Name:</label> <br />
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>
                  <div className='name-input'>
                    <label htmlFor="email">Email:</label><br />
                    <Field type="text" name="email" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className='name-input'>
                    <label htmlFor="mobile">Mobile:</label><br />
                    <Field type="text" name="mobile" />
                    <ErrorMessage name="mobile" component="div" className="error-message" />
                  </div>
                  <div className='name-input'>
                    <label htmlFor="password">Password:</label><br />
                    <Field type="password" name="password" placeholder='Enter Updated Password' />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    {load ? 'Wait...' : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className='account-details'>
            <h2>Account Information</h2>
            <p><strong>Name:</strong> {userdata && userdata.name}</p>
            <p><strong>Email:</strong> {userdata && userdata.email}</p>
            <p><strong>Mobile:</strong> {userdata && userdata.mobile}</p>
            <p><strong>Password:</strong> ********</p>
            <button onClick={() => setEdit(true)}>Edit</button>
          </div>
        )
      ) : (
       <p style={{textAlign:"center", fontSize:"20px", height:"100vh", marginTop:"100px"}}>please login</p>
      )}
    </>
  );
};

export default Account;