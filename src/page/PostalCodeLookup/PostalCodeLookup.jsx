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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function PostalCodeLookup() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Typography color={"#131485"} variant='h6'>
          Postal Code Lookup
        </Typography>
        <Typography>
          This allows users to find the postal code of any post office in Sri
          Lanka, simplifying the process of addressing mail accurately and
          ensuring smooth and efficient mail delivery.
        </Typography>
        <Stack direction={"row"}>
          <Stack spacing={2} direction={"column"}>
            <Stack
              borderRadius={2}
              borderColor={"#131485"}
              border={2}
              padding={2}
              spacing={2}
              direction={"column"}
            >
              <Typography color={"#131485"} variant='h7'>
                Search By Post Office Name
              </Typography>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id='demo-multiple-name-label'>
                  Select Post office Name
                </InputLabel>
                <Select
                  labelId='demo-multiple-name-label'
                  id='demo-multiple-name'
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label='Select Post office Name' />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id='demo-multiple-name-label'>
                  Select Province
                </InputLabel>
                <Select
                  labelId='demo-multiple-name-label'
                  id='demo-multiple-name'
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label='Select Province' />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant='contained'>OK</Button>
            </Stack>
            <Stack
              borderRadius={2}
              borderColor={"#131485"}
              border={2}
              padding={2}
              spacing={2}
              direction={"column"}
            >
              <Typography color={"#131485"} variant='h7'>
                Search By Postal Code
              </Typography>
              <TextField
                id='outlined-basic'
                label='Enter the postal code'
                variant='outlined'
              />
              <Button variant='contained'>OK</Button>
            </Stack>
          </Stack>
          <img width={500} src={postOffice} />
        </Stack>
        <img src={frame} />
      </Stack>
    </>
  );
}

export default PostalCodeLookup;
