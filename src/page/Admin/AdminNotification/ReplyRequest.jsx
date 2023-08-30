import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useForm from "../../../Hooks/useForm";
import {Box, Stack, Typography} from "@mui/material";
import axios from "../../../API/axios";

export default function ReplyRequest({open, setOpen, currentCustomer}) {
    console.log(currentCustomer);
    console.log(currentCustomer.userName)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setValues({});
        setOpen(false);
    };

    // 64eb828c14d1df4cbb06f137
    // John12313

    const getFreshModel = () => ({
        userID: currentCustomer ? currentCustomer._id : "",
        userName: currentCustomer ? currentCustomer.userName :"",
        senderAddress: "",
        isReply: true,
        hasLetter: true,
        message: "You have a letter",
        requestAccepted: "pending",
        requestReplied: false,
    });

    const {values, setValues, handleInputChange} = useForm(getFreshModel);

    const onSubmit = async () => {
        try {
            console.log(values);
            // Send form data to API
            await axios.post("/api/notifications", values);
            handleClose(); // Close the dialog on successful submission
        } catch (error) {
            console.error("Error sending notification:", error);
            // Handle error or show error message
        }
    };

    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Reply to Request</DialogTitle>
                <DialogContent>
                    <Stack marginTop={2} spacing={2} direction={"column"} width={500}>
                        {/* <Stack spacing={2} direction={"row"}> */}
                            <TextField
                                id='outlined-basic'
                                label='User ID'
                                variant='outlined'
                                value={
                                    currentCustomer ?
                                        currentCustomer._id ?
                                            currentCustomer._id : values.userID
                                        : values.userID
                                }
                                name='userID'
                                onChange={handleInputChange}
                            />
                            <TextField
                                id='outlined-basic'
                                label='User Name'
                                variant='outlined'
                                value={currentCustomer ? currentCustomer.userName : ""}
                                name='userName'
                                onChange={handleInputChange}
                            />
                        {/* </Stack> */}
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


