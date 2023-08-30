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
import {set} from "react-hook-form";
import {useState} from "react";

export default function InqueryModal({open, setOpen, currentCustomer}) {
    const [username, setUsername] = useState("");
    console.log(currentCustomer);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Reply to Request</DialogTitle>
                <DialogContent>
                    <Stack marginTop={2} spacing={2} direction={"column"} width={500}>
                        <Typography variant='h6'>
                            Username : {currentCustomer?.userName}
                        </Typography>
                        <Typography variant='h6'>
                            Address : {currentCustomer?.address}
                        </Typography>
                        <Typography variant='h6'>
                            Message : {currentCustomer?.message}
                        </Typography>
                        <Typography variant='h6'>
                            Phone Number : {currentCustomer?.phoneNumber}
                        </Typography>
                        <Typography variant='h6'>
                            Created Date : {currentCustomer?.createdAt}
                        </Typography>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained'>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}