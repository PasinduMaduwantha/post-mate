
// // import Button from "../Buttons/Buttons";

// import Input from '../Inputs/input';
// import { useCallback, useState, useRef, useEffect } from 'react';
// import { useForm , FieldValues, SubmitHandler} from 'react-hook-form';
// import {Navigate, useNavigate} from 'react-router-dom';
// import { toast } from "react-hot-toast";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";

// import './AuthForm.css'
// import axios from '../../API/axios';

// const AuthForm = () => {
//     const navigate = useNavigate()

//     const [variant, setVariant] = useState('LOGIN')
//     const [isLoading, setIsLoading] = useState(false)

//     const toggleVarient = useCallback(() => {
//         if (variant === 'LOGIN') {
//             setVariant('REGISTER')
//         } else {
//             setVariant('LOGIN')
//         }
//     },[variant])

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     }=useForm({
//         defaultValues: { 
//             username: '',
//             email: '',
//             password: '',
//             confirmpassword: '',
//         }
//     })

//     const validate= (data) => {
//         const errors = {};
    
//         if (data.password !== data.confirmPassword) {
//           errors.confirmPassword = 'Passwords do not match';
//         }
    
//         return errors;
//     }

//     const onSubmit = (data) => {
//         const { confirmpassword, ...others } = data
    
//         console.log(data)
//         setIsLoading(true);
//         validate(data);
//         if (variant === 'REGISTER') {

//           axios.post('/api/auth/register', others)
//           .then(response => {
//               if (response.status === 201) {
//                   toast.success('Registration successful!');
//                   navigateToRegister() // Redirect to login page after successful registration
//                 } else {
//                     toast.error('Registration failed. Please check your details.');
//                 }
//             })
//             .catch(error => {
//             console.error('Error during registration:', error);
//             toast.error('Something went wrong during registration.');
//         })
//         .finally(() => setIsLoading(false))
//     }
    
//     if (variant === 'LOGIN') {
//         const {email, ...withoutEmail} = others
//         axios.post('/api/auth/login', withoutEmail)
//         .then(response => {
//                 console.log(response)
//             if (response.status === 200) {
//                 toast.success('Login successful!');
//                 if (response.data.isAdmin) {
//                     navigateToAdminDashboard()
//                 } else {
//                     navigateToUserDashboard()
//                 }
//             } else {
//                 toast.error('Invalid credentials. Please try again.');
//             }
//             })
//             .catch(error => {
//             console.error('Error during login:', error);
//             toast.error('Something went wrong during login.');
//             })
//             .finally(() => setIsLoading(false));
            
//         }
//       }

//   const navigateToRegister = () => {
//     navigate("/register");
//   };

//   const navigateToUserDashboard = () => {
//     navigate("/userhome");
//   };

//   const navigateToAdminDashboard = () => {
//     navigate("/admindashboard");
//   };

//   return (
//     <div className='auth-background'>
//       <Box width={"100%"} bgcolor={"#131485"} borderRadius={2} padding={4}>
//         <Box
//           borderColor={"#0001E4"}
//           bgcolor={"white"}
//           borderRadius={2}
//           padding={4}
//           width={"100%"}
//         >
//           <Stack
//             direction='column'
//             justifyContent='center'
//             alignItems='center'
//             spacing={2}
//           >
//             <Typography color={"#F01F75"} variant='h6'>
//               Create Account
//             </Typography>
//             <Stack
//               justifyContent='center'
//               alignItems='center'
//               spacing={2}
//               direction={"column"}
//             >
//               <Stack spacing={2} direction={"row"}>
//                 <TextField
//                   id='outlined-basic'
//                   label='Username'
//                   variant='outlined'
//                 />
//                 <TextField
//                   id='outlined-basic'
//                   label='Email'
//                   variant='outlined'
//                 />
//               </Stack>
//               <Stack spacing={2} direction={"row"}>
//                 <TextField
//                   id='outlined-basic'
//                   label='Password'
//                   variant='outlined'
//                   type='password'
//                 />
//                 <TextField
//                   id='outlined-basic'
//                   label='Confirm Password'
//                   variant='outlined'
//                   type='password'
//                 />
//               </Stack>
//               <Box padding={2} borderRadius={2} bgcolor={"lightgray"}>
//                 <Typography>
//                   Passwords must be at least 6 characters and contain at least
//                   one letter and one number Passwords are case-sensitive.
//                 </Typography>
//               </Box>
//             </Stack>
//             <Button variant='contained'>Continue</Button>
//             <Typography>Existing User? Click here to log in</Typography>
//           </Stack>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default AuthForm;

// import Button from "../Buttons/Buttons";
import { FieldValues } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

import Input from "../Inputs/input";
import { useCallback, useState, useRef, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography, AppBar } from "@mui/material";
import useForm from "../../Hooks/useForm";
import logo from "../../images/logo.png";
import Footer from "../Footer/Footer";

import "./AuthForm.css";

const AuthForm = () => {
  const navigate = useNavigate();

  const getFreshModel = () => ({
    username: "",
    email: "",
    password: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const [Varient, setVarient] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);


  const onSubmit = () => {

    navigate('/signUpForm', { state: values })
    console.log(values);
  };


  return (
    <>
    <div className='auth-background'>
      <AppBar
      sx={{ marginBottom: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{ background: "#EFE7FA" }}
      position='fixed'
      elevation={0}
    >
      <img style={{ maxWidth: 120 }} src={logo} />
    </AppBar>

      <Box marginTop={15} width={"100%"} bgcolor={"#131485"} borderRadius={2} padding={4}>
        <Box
          borderColor={"#0001E4"}
          bgcolor={"white"}
          borderRadius={2}
          padding={4}
          width={"100%"}
        >
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            <Typography color={"#F01F75"} variant='h6'>
              Create Account
            </Typography>
            <Stack
              justifyContent='center'
              alignItems='center'
              spacing={2}
              direction={"column"}
            >
              <Stack spacing={2} direction={"row"}>
                <TextField
                  id='outlined-basic'
                  label='Username'
                  variant='outlined'
                  value={values.username}
                  name='username'
                  onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Email'
                  value={values.email}
                  name='email'
                  type='email'
                  variant='outlined'
                  onChange={handleInputChange}
                />
              </Stack>
              <Stack spacing={2} direction={"row"}>
                <TextField
                  name="password"
                  id='outlined-basic'
                  label='Password'
                  value={values.password}
                  variant='outlined'
                  type='password'
                  onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  name="confirmpassword"
                  label='Confirm Password'
                  variant='outlined'
                  type='password'
                />
              </Stack>
              <Box padding={2} borderRadius={2} bgcolor={"lightgray"}>
                <Typography>
                  Passwords must be at least 6 characters and contain at least
                  one letter and one number Passwords are case-sensitive.
                </Typography>
              </Box>
            </Stack>
            <Button onClick={onSubmit} variant='contained'>
              Continue
            </Button>
            <Typography>Existing User? 
              <Link to="/login">Click here to log in</Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </div>
    <Footer />
    </>
  );
};

export default AuthForm;

