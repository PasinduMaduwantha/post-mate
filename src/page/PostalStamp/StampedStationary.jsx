import { Stack, Typography } from "@mui/material";
import stampPrice from "../../images/priceStamp.png";

function StampedStationary() {
  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        padding={2}
      >
        <Typography 
        
        color={"#131485"} variant='h6'>
          Stamped Stationery
        </Typography>
        <img width={700} src={stampPrice} alt='' />
      </Stack>
    </>
  );
}

export default StampedStationary;
