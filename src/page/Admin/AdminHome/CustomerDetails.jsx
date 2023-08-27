import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import UpdateCustomerForm from "./UpdateCustomerForm";

function CustomerDetails({ currentCustomer }) {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState((prev) => currentCustomer);
  useEffect(() => {
    setCustomer((prev) => customer);
  }, [currentCustomer]);

  return (
    <>
      {customer && (
        <UpdateCustomerForm
          open={open}
          setOpen={setOpen}
          currentCustomer={customer}
        />
      )}
      <Stack
        border={2}
        borderRadius={2}
        width={"100%"}
        padding={2}
        direction={"column"}
      >
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={2}
        >
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt={currentCustomer.firstName}
            src='/broken-image.jpg'
          />
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
          >
            <Typography>
              {currentCustomer.firstName} {currentCustomer.lastName}
            </Typography>
            <Typography>{currentCustomer.id}</Typography>
            <Typography>Date created : {currentCustomer.id}</Typography>
          </Stack>
        </Stack>

        <Stack direction='row' justifyContent='flex-end'>
          <IconButton onClick={() => setOpen(true)}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>

        <Stack
          marginTop={2}
          border={2}
          borderRadius={2}
          width={"100%"}
          padding={2}
          spacing={2}
          color={"#131485"}
        >
          <Typography>First Name: {currentCustomer.firstName}</Typography>
          <Typography>Last Name: {currentCustomer.lastName}</Typography>
          <Typography>Username: {currentCustomer.userName}</Typography>
          <Typography>Password: {currentCustomer.password}</Typography>
          <Typography>Email: {currentCustomer.email}</Typography>
          <Typography>
            Nearby Post Office: {currentCustomer.nearbyPostOffice}
          </Typography>
          <Typography>Domain Name: {currentCustomer.domainName}</Typography>
          <Typography>
            National ID Number: {currentCustomer.nationalIDNumber}
          </Typography>
          <Typography>
            Permanent Address: {currentCustomer.permanentAddress}
          </Typography>
          <Typography>
            Current Address: {currentCustomer.currentAddress}
          </Typography>
          <Typography>
            Third-Party Address: {currentCustomer.thirdPartyAddress}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default CustomerDetails;
