// import Button from "../Buttons/Buttons";
import Input from "../Inputs/input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

import "./AuthForm.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const AuthForm = () => {
  const navigate = useNavigate();

  const [Varient, setVarient] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (Varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("LOGIN");
    }
  }, [Varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    if (Varient === "REGISTER") {
      // Axios Register
      navigateToRegister();
    }
    if (Varient === "LOGIN") {
      // NextAuth Signin
      if (data.isAdmin) {
        navigateToAdminDashboard();
      } else {
        navigateToUserDashboard();
      }
    }
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToUserDashboard = () => {
    navigate("/userhome");
  };

  const navigateToAdminDashboard = () => {
    navigate("/admindashboard");
  };

  return (
    <div className='auth-background'>
      <Box width={"100%"} bgcolor={"#131485"} borderRadius={2} padding={4}>
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
                />
                <TextField
                  id='outlined-basic'
                  label='Email'
                  variant='outlined'
                />
              </Stack>
              <Stack spacing={2} direction={"row"}>
                <TextField
                  id='outlined-basic'
                  label='Password'
                  variant='outlined'
                  type='password'
                />
                <TextField
                  id='outlined-basic'
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
            <Button variant='contained'>Continue</Button>
            <Typography>Existing User? Click here to log in</Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default AuthForm;
