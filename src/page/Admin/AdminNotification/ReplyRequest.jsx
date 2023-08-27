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

export default function ReplyRequest({ open, setOpen, currentCustomer }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setValues({});
    setOpen(false);
  };

  const getFreshModel = () => ({
    userId: "",
    userName: "",
    senderAddress: "",
    customMessage: "",
  });

  const { values, setValues, handleInputChange } = useForm(getFreshModel);

  //   React.useEffect(() => {
  //     setValues((prev) => currentCustomer);
  //   }, [open]);

  const onSubmit = () => {};

  return (
    <div>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Reply to Request</DialogTitle>
        <DialogContent>
          <Stack marginTop={2} spacing={2} direction={"column"} width={500}>
            <Stack spacing={2} direction={"row"}>
              <TextField
                id='outlined-basic'
                label='User ID'
                variant='outlined'
                value={values.userId}
                name='userId'
                onChange={handleInputChange}
              />
              <TextField
                id='outlined-basic'
                label='User Name'
                variant='outlined'
                value={values.userName}
                name='userName'
                onChange={handleInputChange}
              />
            </Stack>
            <TextField
              id='outlined-basic'
              label='Sender Address'
              variant='outlined'
              value={values.senderAddress}
              name='senderAddress'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Custom Message'
              variant='outlined'
              value={values.customMessage}
              name='customMessage'
              onChange={handleInputChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit} variant='contained'>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
