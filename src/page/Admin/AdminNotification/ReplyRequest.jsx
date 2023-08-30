import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useForm from "../../../Hooks/useForm";
import {Stack} from "@mui/material";
import axios from "../../../API/axios";
import {useState} from "react";

export default function ReplyRequest({open, setOpen, currentCustomer}) {
    const [username, setUsername] = useState("");
    console.log(currentCustomer);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setValues({});
        setOpen(false);
    };

    const getFreshModel = () => ({
        userName: currentCustomer?.userName || "",
        senderAddress: "",
        isReply: true,
        hasLetter: true,
        message: "You have a letter",
    })

    const {values, setValues, handleInputChange} = useForm(getFreshModel);

    console.log("start values", values);

    const onSubmit = async () => {
        setValues({
            ...values,
            userID: currentCustomer ? currentCustomer._id : "",
            userName: currentCustomer ? currentCustomer.userName : "default user",
            isReply: true,
            hasLetter: true
        });

        if (values.isReply && values.hasLetter && values.userID && values.userName) {
            try {
                console.log(values);
                // Send form data to API
                await axios.post("/api/notifications", values);
                handleClose(); // Close the dialog on successful submission
            } catch (error) {
                console.error("Error sending notification:", error);
                // Handle error or show error message
            }
        }
    };

    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Reply to Request</DialogTitle>
                <DialogContent>
                    <Stack marginTop={2} spacing={2} direction={"column"} width={500}>
                        {console.log("aa", values)}
                        <TextField
                            id='outlined-basic'
                            label='User Name'
                            variant='outlined'
                            value={values.userName}
                            name='userName'
                            onChange={handleInputChange}
                        />
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
                            value={values.message}
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