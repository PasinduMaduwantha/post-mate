import "./AuthForm.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function LoginForm() {
  return (
    <>
      <div className='auth-background'>
        <Box
          borderColor={"#0001E4"}
          bgcolor={"white"}
          borderRadius={2}
          padding={4}
          width={"100%"}
        >
          <Stack direction={"row"}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
              width={500}
            >
              <Typography color={"#F01F75"} variant='h6'>
                Don't have an account
              </Typography>

              <Button variant='contained'>Sign Up</Button>
            </Stack>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Typography color={"#F01F75"} variant='h6'>
                Login to your account
              </Typography>
              <Stack
                justifyContent='center'
                alignItems='center'
                spacing={2}
                direction={"column"}
              >
                <TextField
                  id='outlined-basic'
                  label='Username'
                  variant='outlined'
                />

                <TextField
                  id='outlined-basic'
                  label='Password'
                  variant='outlined'
                  type='password'
                />

                <Typography> Forgot Password ?</Typography>
              </Stack>
              <Button variant='contained'>Login</Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default LoginForm;
