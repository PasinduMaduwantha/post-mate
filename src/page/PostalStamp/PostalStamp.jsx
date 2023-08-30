import { Stack, Typography } from "@mui/material";
import stampCollection from "../../images/z_p51-Stamps-1 1.png";
import ValueOfStamps from "./ValueOfStamps";
import RevenueStamps from "./RevenueStamps";
import StampedStationary from "./StampedStationary";
import SpoiltStamps from "./SpoiltStamps";
import Penalty from "./Penalty";
import ReplyCoupons from "./ReplyCoupons";

function PostalStamp() {
  return (
    <>
      <Stack direction={"column"} padding={2}>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
          border={2}
          borderRadius={2}
          padding={2}
        >
          <Stack width={"50%"} direction={"column"}>
            <Typography
            marginBottom={2}
            bgcolor={"#D9D9D9"}
            // paddingLeft={50}
            // paddingRight={50}
            // paddingTop={2}
            // paddingBottom={2}
            padding={2}
            borderRadius={2} 
              alignItems='center'
              justifyContent='center'
              color={"#131485"}
              variant='h4'
            >
              Stamps And Stamped Stationery
            </Typography>
            <Typography>
              Stamps, envelopes, post cards, letter cards and aerogramme are
              sold at all Post Offices, including Sub-Post Offices and Receiving
              Offices.
            </Typography>
          </Stack>
          <img width={500} src={stampCollection} alt='' />
        </Stack>
        <ValueOfStamps />
        <RevenueStamps />
        <StampedStationary />
        <SpoiltStamps />
        <Penalty />
        <ReplyCoupons />
      </Stack>
    </>
  );
}

export default PostalStamp;
