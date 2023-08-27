import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomersTable from "./CustomersTable";

function AdminHome() {
  const [counts, setCounts] = useState({
    customers: 124,
    inquiry: 7,
    requests: 43,
  });

  return (
    <>
      <Stack spacing={2} margin={2} direction={"column"}>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack
            borderRadius={2}
            padding={3}
            bgcolor={"#D0F8FF"}
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            <Typography
              borderRadius={2}
              paddingLeft={6}
              paddingRight={6}
              paddingBottom={1}
              paddingTop={1}
              bgcolor={"#21ABA5"}
              color={"#FFFFFF"}
            >
              Customer
            </Typography>
            <Typography fontWeight={500} variant='h3'>
              {counts.customers}
            </Typography>
          </Stack>

          <Stack
            borderRadius={2}
            padding={3}
            bgcolor={"#910031"}
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            <Typography
              borderRadius={2}
              paddingLeft={6}
              paddingRight={6}
              paddingBottom={1}
              paddingTop={1}
              bgcolor={"#F25900"}
              color={"#FFFFFF"}
            >
              Inquiry
            </Typography>
            <Typography color={"white"} fontWeight={500} variant='h3'>
              {counts.inquiry}
            </Typography>
          </Stack>

          <Stack
            borderRadius={2}
            padding={3}
            bgcolor={"#D0F8FF"}
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            <Typography
              borderRadius={2}
              paddingLeft={6}
              paddingRight={6}
              paddingBottom={1}
              paddingTop={1}
              bgcolor={"#21ABA5"}
              color={"#FFFFFF"}
            >
              Customer
            </Typography>
            <Typography fontWeight={500} variant='h3'>
              {counts.customers}
            </Typography>
          </Stack>
        </Stack>

        <CustomersTable />
      </Stack>
    </>
  );
}

export default AdminHome;
