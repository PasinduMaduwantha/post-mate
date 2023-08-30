import { Stack, Typography,Box } from "@mui/material";
import stampCollection from "../../images/Sri-Lanka-2016-10-07-Flowers-of-SriLanka-Impatiens-elongata-Stamp-Rs-1 1.png";

function ReplyCoupons() {
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
          Reply Coupons
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography width={"50%"}>
            <ul>
              <li>
                International reply coupons at Rs. 125.00 each can be purchased
                at the General Post Office, Colombo. Any other Post Office, at
                which application is made for International reply coupons, will
                obtain them for the applicant.
              </li>
              <li>
                The holder of a reply coupon received from another country
                entitled on presenting it at any Post Office in Sri Lanka, to
                receive exchange a postage stamp or stamps (as may be desired)
                of the vale of Rs. 50.00 for an International reply coupon.
              </li>
            </ul>
          </Typography>
          <img src={stampCollection} alt='' />
        </Stack>
      </Stack>
      <Box marginBottom={6} height={20} bgcolor={"#131485"} ></Box>
    </>
  );
}

export default ReplyCoupons;
