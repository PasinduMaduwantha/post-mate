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
import mailSent from "../../images/Mail sent-pana 1.png";

function RecievedLetterTracker() {
  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Typography color={"#131485"} variant='h4'>
          Received Letter Tracker
        </Typography>
        <Typography>
          This allows users to find the postal code of any post office in Sri
          Lanka, simplifying the process of addressing mail accurately and
          ensuring smooth and efficient mail delivery.
        </Typography>
        <Stack
          borderRadius={2}
          borderColor={"#131485"}
          border={2}
          padding={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack spacing={2} direction={"column"}>
            <Typography
              bgcolor={"#131485"}
              borderRadius={2}
              padding={2}
              width={"100%"}
              color={"white"}
              variant='h7'
              align='center'
            >
              Send Request
            </Typography>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Sender Address'
              variant='outlined'
            />
            <TextField id='outlined-basic' label='Message' variant='outlined' />

            <Button variant='contained'>Send Request</Button>
          </Stack>
          <img width={400} src={mailSent} />
        </Stack>
      </Stack>
    </>
  );
}

export default RecievedLetterTracker;
