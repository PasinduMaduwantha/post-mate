import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useForm from "../../../Hooks/useForm";
import {Stack} from "@mui/material";
import axios from "../../../API/axios";

export default function UpdateCustomerForm({open, setOpen, currentCustomer}) {
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
        username: "",
        password: "",
        email: "",
        nearByPostOffice: "",
        domainName: "",
        nationalIDNumber: "",
        permanentAddress: "",
        currentAddress: "",
        thirdPartyAddress: "",
        hasLetter: false,
    });

    const {values, setValues, handleInputChange} = useForm(getFreshModel);

    React.useEffect(() => {
        setValues((prev) => currentCustomer);
    }, [open]);

    const onSubmit = async () => {
        try {
            console.log(values);
            // Send form data to API
            await axios.put(`/api/users/${values._id}`, values);
            handleClose(); // Close the dialog on successful submission
        } catch (error) {
            console.error("Error adding customer:", error);
            // Handle error or show error message
        }
    };

    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Edit Customer</DialogTitle>
                <DialogContent>
                    {/*{console.log(currentCustomer)}*/}
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
                            value={values.username}
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
                            value={values.nearByPostOffice}
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
                            value={values.nationalIdNumber}
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
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

