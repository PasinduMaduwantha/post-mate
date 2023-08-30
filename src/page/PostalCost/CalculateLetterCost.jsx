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
import boxPackage from "../../images/3268388_720 1.png";
// import { weights_costs, updateWeightCost } from './postalCostModel';
import axios from "../../API/axios";

import { useState , useEffect} from "react";

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

// const weights_costs = {
//   "0-250g" : "90.00",
//   "250-500g":"110.00",
//   "500-1000g":"130.00",
//   "1000-1500g":"150.00",
//   "1500-2000g":"200.00",
//   "2000-2500g":"250.00",
//   "2500-3000g":"300.00",
//   "3000-4000g":"350.00",
//   "4000-5000g":"400.00",
//   "5000-6000g":"450.00",
//   "6000-7000g":"500.00",
//   "7000-8000g":"550.00",
//   "8000-9000g":"600.00",
//   "9000-10000g":"650.00",
//   "10000-11000g":"700.00",
//   "11000-12000g":"750.00",
//   "12000-13000g":"800.00",
//   "13000-14000g":"850.00",
//   "14000-15000g":"900.00",
//   "15000-16000g":"950.00",
//   "16000-17000g":"1000.00",
//   "17000-18000g":"1050.00",
//   "18000-19000g":"1100.00",
//   "19000-20000g":"1150.00",

// }




function CalculateLetterCost() {
  const [cost, setCost] = useState();
  const[weights, setWeight] = useState();
  const [weights_costs, setWeightCost] = useState([]);

  const [postalCosts, setPostalCosts] = useState([{}]);

  useEffect(() => {
    const fetchPostInfo = async () => {
      console.log("Fetching info")
      try {
        const response = await axios.get("/api/postalcost/"); // Using relative path
        setPostalCosts(response.data);
        console.log(postalCosts)

      } catch (error) {
        console.error("Error fetching requests:", error);
      }

    };

    fetchPostInfo();
  }, []);

  // useEffect(() => {
    // const fetchPostalCost = async () => {
    //   console.log("Fetching info")
    //   try {
    //     const response = await axios.get(`/api/postalcost/find/${weights}`); // Using relative path
    //     console.log(costs)

    //   } catch (error) {
    //     console.error("Error fetching requests:", error);
    //   }

    // };

  //   fetchPostInfo();
  // }, []);




  
  const totalCost = Object.keys(weights_costs).map((city) => (
    <MenuItem key={city} value={city}>
      {city}
    </MenuItem>
  ));
  
  const handleWeightChange = (event) => {
    // updateWeightCost("0-250g", "40000.00");
    const selectedValue = event.target.value;
    setWeight(selectedValue);
    console.log("selected value", weights);

    postalCosts.find((postalcost) => {
      if (postalcost.weight === selectedValue) {
        setCost(postalcost.cost);
        console.log("cost", cost);
      }
    });

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
        <Stack direction={"column"} >
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='demo-multiple-name-label'>
              Select letter weight range
            </InputLabel>
            <Select
              labelId='demo-multiple-name-label'
              id='demo-multiple-name'
              value={weights}
              onChange={handleWeightChange}
              input={<OutlinedInput label='Select letter weight range' />}
              MenuProps={MenuProps}
            >
              {/* {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))} */}
              {postalCosts.map((postalcost) => (
                <MenuItem key={postalcost.weight} value={postalcost.weight}>
                  {postalcost.weight}
                </MenuItem>
              ))}
            

              <MenuItem></MenuItem>
              {totalCost}
            </Select>
          </FormControl>
          <Button sx={{ m: 1, width: 300 }} variant='contained' onClick={handleWeightChange}>Find Postal Cost</Button>
          <TextField
            sx={{ m: 1, width: 300 }}
            id='outlined-basic'
            label='Postal Cost'
            disabled={true}
            InputLabelProps={{shrink:cost}}
            variant='outlined'
            onAbort={handleWeightChange}
            value={cost}
          />
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
