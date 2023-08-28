import { useTheme } from "@emotion/react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import postOffice from "../../images/Rectangle 35.png";
import frame from "../../images/Frame.png";
import axios from "../../API/axios";
import { toast } from "react-hot-toast";
import useForm from "../../Hooks/useForm";

function SendInquiry() {
  const getFreshModel = () => ({
    userName: "",
    address: "",
    phoneNumber:"",
    message: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);


    const onSendClick = () => {

      axios.post('/api/inqueries', values)
      .then(response => {
              console.log(response)
          if (response.status === 200) {
              toast.success('Add successful!');
              setValues(getFreshModel)
    
          } else {
              toast.error('Invalid credentials. Please try again.');
          }
          })
          .catch(error => {
          console.error('Error during login:', error);
          toast.error('Something went wrong .');
          })

     


    
    };


  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Typography color={"#131485"} variant='h4'>
          Send Inquiry
        </Typography>
        <Typography>
          This allows users to find the postal code of any post office in Sri
          Lanka, simplifying the process of addressing mail accurately and
          ensuring smooth and efficient mail delivery.
        </Typography>
        <Stack direction={"row"}>
          <Stack
            borderRadius={2}
            borderColor={"#131485"}
            border={2}
            padding={2}
            spacing={2}
            direction={"column"}
          >
            <Typography
              bgcolor={"#131485"}
              borderRadius={2}
              padding={2}
              width={"100%"}
              color={"white"}
              variant='h7'
              align='center'
            >
              Send Inquiry
            </Typography>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              name="userName"
              value = {values.userName}
              onChange={handleInputChange}
            />
            <TextField id='outlined-basic' label='Address' variant='outlined'
            name="address"
            value = {values.address}
            onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Phone number'
              variant='outlined'
              name="phoneNumber"
              value = {values.phoneNumber}
              onChange={handleInputChange}

            />
            <TextField id='outlined-basic' label='Message' variant='outlined' 
            name="message"
            value = {values.message}
            onChange={handleInputChange}
            />

            <Button onClick={onSendClick} variant='contained'>Send Request</Button>
          </Stack>
        </Stack>
        <img style={{ paddingTop: 10 }} src={frame} />
      </Stack>
    </>
  );
}

export default SendInquiry;
