import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useForm from "../../../Hooks/useForm";
import { Box, Stack, Typography } from "@mui/material";

export default function UpdateCustomerForm({ open, setOpen, currentCustomer }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setValues({});
    setOpen(false);
  };

  const getFreshModel = () => ({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    nearbyPostOffice: "",
    domainName: "",
    nationalIDNumber: "",
    permanentAddress: "",
    currentAddress: "",
    thirdPartyAddress: "",
    hasLetter: false,
  });

  const { values, setValues, handleInputChange } = useForm(getFreshModel);

  React.useEffect(() => {
    setValues((prev) => currentCustomer);
  }, [open]);

  const onSubmit = () => {};

  return (
    <div>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <Stack marginTop={2} spacing={2} direction={"column"} width={500}>
            <Stack spacing={2} direction={"row"}>
              <TextField
                id='outlined-basic'
                label='First Name'
                variant='outlined'
                value={values.firstName}
                name='firstName'
                onChange={handleInputChange}
              />
              <TextField
                id='outlined-basic'
                label='Last Name'
                variant='outlined'
                value={values.lastName}
                name='lastName'
                onChange={handleInputChange}
              />
            </Stack>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              value={values.userName}
              name='userName'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              value={values.email}
              name='email'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Nearby Post Office'
              variant='outlined'
              value={values.nearbyPostOffice}
              name='nearbyPostOffice'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Domain Name'
              variant='outlined'
              value={values.domainName}
              name='domainName'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='National ID Number'
              variant='outlined'
              value={values.nationalIDNumber}
              name='nationalIDNumber'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Permanent Address'
              variant='outlined'
              value={values.permanentAddress}
              name='permanentAddress'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Current Address'
              variant='outlined'
              value={values.currentAddress}
              name='currentAddress'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Third-Party Address'
              variant='outlined'
              value={values.thirdPartyAddress}
              name='thirdPartyAddress'
              onChange={handleInputChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit} variant='contained'>
            Add Customer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}