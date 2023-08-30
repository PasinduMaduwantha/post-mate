import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import useForm from "../../../Hooks/useForm";

import axios from "../../../API/axios";

function AdminSendNotification() {

    const handleClose = () => {
        setValues({getFreshModel});
    };

    const getFreshModel = () => ({
        // userID:  "",
        userName: "",
        senderAddress: "",
        isReply: true,
        hasLetter: true,
        message: "You have a letter",
    });

    const {values, setValues, handleInputChange} = useForm(getFreshModel);

    const onSubmit = async () => {

        setValues({...values, isReply: true, hasLetter: true});

        if (values.isReply && values.hasLetter) {
            try {
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
        <>
            <Box
                borderColor={"#0001E4"}
                bgcolor={"#D9D9D9"}
                borderRadius={2}
                padding={4}
                width={"100%"}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                    <Typography color={"#131485"} variant='h6'>
                        Send Notification
                    </Typography>
                    <Stack spacing={2} direction={"column"}>
                        <Stack spacing={2} direction={"row"}>
                            {/* <TextField
                id='outlined-basic'
                label='User Id'
                value={values.userID}
                name='userID'
                variant='outlined'
                onChange={handleInputChange}
              /> */}
                            <TextField
                                id='outlined-basic'
                                label='Username'
                                variant='outlined'
                                InputLabelProps={{shrink: true}}
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
                            InputLabelProps={{shrink: true}}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Custom Message'
                            variant='outlined'
                            value={values.message}
                            InputLabelProps={{shrink: true}}
                            name='customMessage'
                            onChange={handleInputChange}
                            multiline
                        />
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Button onClick={handleClose} variant='outlined'>
                            Cancel
                        </Button>
                        <Button onClick={onSubmit} variant='contained'>
                            Send
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default AdminSendNotification;
