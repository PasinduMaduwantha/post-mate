import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import boxPackage from "../../images/3268388_720 1.png";
import { useState } from "react";

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

function CalculateLetterCost() {
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
        justifyContent='center'
        alignItems='center'
        spacing={2}
        direction={"row"}
        border={2}
        borderRadius={2}
        padding={2}
        marginBottom={2}
      >
        <img width={300} src={boxPackage} alt='' />
        <Stack direction={"column"}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='demo-multiple-name-label'>
              Select letter weight range
            </InputLabel>
            <Select
              labelId='demo-multiple-name-label'
              id='demo-multiple-name'
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label='Select letter weight range' />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant='contained'>Find Postal Cost</Button>
          <Typography marginTop={10} width={400}>
            Dimention: No letter may exceed 610 mm in length, 300 mm in width
            and 300 mm in depth.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default CalculateLetterCost;
