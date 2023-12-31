import { useTheme } from "@emotion/react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import postOffice from "../../images/Rectangle 35.png";
import frame from "../../images/Frame.png";
import axios from "../../API/axios";
import { toast } from "react-hot-toast";
import useForm from "../../Hooks/useForm";

function SendInquiry() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    
    if (userJSON) {
      console.log("User JSON:")
      try {
        // Parse the JSON string into a JavaScript object
        const userObject = JSON.parse(userJSON);
        
          // Access the username property
          const userUsername = userObject.username;  
          // Set the username in the state
          setUsername(userUsername);
        } catch (error) {
          console.error("Error parsing user JSON:", error);
        }
      } 
      console.log(username);
      setValues(getFreshModel)

}, [username]);

  const getFreshModel = () => ({
    userName: username,
    address: "",
    phoneNumber:"",
    message: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);


    

  // useEffect(() => {
  //   if(username){
  //     fetchnotifications(username);
  //   }
    
  // }, [username]);


    const onSendClick = () => {

      setValues({...values, userName: username})

      if(values.userName === username){
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

        }
    
    };


  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Typography 
        marginBottom={2}
        bgcolor={"#D9D9D9"}
        paddingLeft={50}
        paddingRight={50}
        paddingTop={2}
        paddingBottom={2}
        borderRadius={2} 
        color={"#131485"} variant='h4'>
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
      <Box marginBottom={6} height={20} bgcolor={"#131485"} ></Box>
    </>
  );
}

export default SendInquiry;
