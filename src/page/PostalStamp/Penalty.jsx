import { Stack, Typography } from "@mui/material";
import stampCollection from "../../images/Add files-rafiki 1.png";

function Penalty() {
  return (
    <>
      <Stack direction={"column"}>
        <Typography
          color={"white"}
          padding={2}
          marginTop={2}
          marginBottom={2}
          bgcolor={"#131485"}
          borderRadius={2}
          variant='h6'
        >
          Penalty for using defaced Stamps
        </Typography>
        <Stack
          direction='row-reverse'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography width={"50%"}>
            The using for the payment of postage or postal fees, with intent to
            cause loss to the Government, of a stamp that has already been used
            for that or any other purpose, is an offence punishable with two (2)
            year imprisonment, or with fine, or both imprisonment and fine.
          </Typography>
          <img src={stampCollection} alt='' />
        </Stack>
      </Stack>
    </>
  );
}

export default Penalty;
