import { Stack, Typography } from "@mui/material";
import stampCollection from "../../images/Stamp collecting-rafiki 1.png";

function RevenueStamps() {
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
          Revenue Stamps
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography width={"50%"}>
            Rs. 500.00 and Rs. 1,000.00. Stamps are revenue stamps other than
            above mentioned stamps and cannot be used as postage stamps nor
            should be used for mailing articles. Their use is restricted to
            legal instruments and the like. No stamp of any value exceeding
            Rs.200.00 will be accepted in payment of charges under the Post
            Office Ordinance.
          </Typography>
          <img src={stampCollection} alt='' />
        </Stack>
      </Stack>
    </>
  );
}

export default RevenueStamps;
