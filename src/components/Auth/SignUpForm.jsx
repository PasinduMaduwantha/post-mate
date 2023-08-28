// import "./AuthForm.css";
import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import useForm from "../../Hooks/useForm";
import axios from '../../API/axios'

function SignUpForm() {

  const navigate = useNavigate();
  const location = useLocation();
  const info = location.state
  const [isLoading, setIsLoading] = useState(false)


  const userModel = () => ({
    firstName: "",
    lastName: "",
    username: info.username,
    email: info.email,
    password: info.password,
    nearByPostOffice: "",
    domainName: "",
    nationalIdNumber: "",
    permanentAddress: "",
    currentAddress: "",
    thirdPartyAddress: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(userModel);

  const siguUp = () => {
    console.log(values);

    axios.post('/api/auth/register', values)
    .then(response => {
      if (response.status === 201) {
        toast.success('Registration successful!');

        localStorage.setItem('user', JSON.stringify(response.data));

        navigate('/home') // Redirect to login page after successful registration
      } else {
        toast.error('Registration failed. Please check your details.');
      }
    })
    .catch(error => {
      console.error('Error during registration:', error);
      toast.error('Something went wrong during registration.');
    })
    // .finally(() => setIsLoading(false))

  }


  return (
    // <div className='auth-background'>
    <Box
      width={"100%"}
      bgcolor={"white"}
      borderRadius={2}
      //   borderColor={"#0001E4"}
      //   border={2}
      padding={4}
      sx={{ border: 1, borderColor: "#0001E4" }}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Typography color={"#F01F75"} variant='h6'>
          Sign Up
        </Typography>
        <Stack spacing={2} direction={"column"}>
          <Stack spacing={2} direction={"row"}>
            <TextField
              id='outlined-basic'
              label='Firstname'
              variant='outlined'
              value={values.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <TextField
              id='outlined-basic'
              label='LastName'
              variant='outlined'
              value={values.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              value={values.username}
              onChange={handleInputChange}
              name="username"
            />
            <TextField
              id='outlined-basic'
              label='Email Address'
              variant='outlined'
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <TextField
              id='outlined-basic'
              label='Nearby Post Office'
              variant='outlined'
              value={values.nearByPostOffice}
              onChange={handleInputChange}
              name="nearByPostOffice"
            />
            <TextField
              id='outlined-basic'
              label='Domain Name'
              variant='outlined'
              value={values.domainName}
              onChange={handleInputChange}
              name="domainName"
            />
          </Stack>
          <TextField
            id='outlined-basic'
            label='National Id Number'
            variant='outlined'
            value={values.nationalIdNumber}
            onChange={handleInputChange}
            name="nationalIdNumber"
          />
          <TextField
            id='outlined-basic'
            label='Permanent Address'
            variant='outlined'
            value={values.permanentAddress}
            onChange={handleInputChange}
            name="permanentAddress"
          />
          <TextField
            id='outlined-basic'
            label='Current Address'
            variant='outlined'
            value={values.currentAddress}
            onChange={handleInputChange}
            name="currentAddress"
          />
          <TextField
            id='outlined-basic'
            label='Third Party Address'
            variant='outlined'
            value={values.thirdPartyAddress}
            onChange={handleInputChange}
            name="thirdPartyAddress"
          />
        </Stack>
        <Button variant='contained' onClick={siguUp} >Sign Up</Button>
        <Typography>Existing User?
          <Link to='/login'>
            Click here to log in
            </Link>
          </Typography>
      </Stack>
    </Box>
    // </div>
  );
}

export default SignUpForm;
