// import "./AuthForm.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function SignUpForm() {
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
            />
            <TextField
              id='outlined-basic'
              label='LastName'
              variant='outlined'
            />
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Email Address'
              variant='outlined'
            />
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <TextField
              id='outlined-basic'
              label='Nearby Post Office'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Domain Name'
              variant='outlined'
            />
          </Stack>
          <TextField
            id='outlined-basic'
            label='National Id Number'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Permanent Address'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Current Address'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Third Party Address'
            variant='outlined'
          />
        </Stack>
        <Button variant='contained'>Sign Up</Button>
        <Typography>Existing User? Click here to log in</Typography>
      </Stack>
    </Box>
    // </div>
  );
}

export default SignUpForm;
