import {Avatar, IconButton, Stack, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {useEffect, useState} from "react";
import UpdateCustomerForm from "./UpdateCustomerForm";
import axios from "../../../API/axios";

function CustomerDetails({currentCustomer}) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState((prev) => currentCustomer);
    useEffect(() => {
        setCustomer((prev) => customer);
    }, [currentCustomer]);

    const handleDelete = () => {
            axios.delete(`/api/users/${currentCustomer._id}`).then((res) => {
                console.log(res);
            });
    }

    return (
        <>
            {console.log(currentCustomer)}
            {currentCustomer && (
                <UpdateCustomerForm
                    open={open}
                    setOpen={setOpen}
                    currentCustomer={currentCustomer}
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
                    {currentCustomer.firstName ? (
                        <Avatar
                            sx={{bgcolor: deepOrange[500]}}
                            alt={currentCustomer.firstName}
                            src='/broken-image.jpg'
                        />
                    ) : (
                        <Avatar
                            sx={{bgcolor: deepOrange[500]}}
                            alt={""}
                            src='/broken-image.jpg'
                        />
                    )}
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='flex-start'
                    >
                        {/*if both first name and last name exists*/}
                        {currentCustomer.firstName && currentCustomer.lastName ? (
                            <Typography>
                                {currentCustomer.firstName} {currentCustomer.lastName}
                            </Typography>
                        ) : (
                            <Typography>
                                {currentCustomer.firstName || currentCustomer.lastName}
                            </Typography>
                        )}
                        <Typography>{currentCustomer.id}</Typography>
                        <Typography>Date created : {currentCustomer.id}</Typography>
                    </Stack>
                </Stack>

                <Stack direction='row' justifyContent='flex-end'>
                    <IconButton onClick={() => setOpen(true)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={handleDelete}>
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
                    {currentCustomer.firstName ? (
                        <Typography>First Name: {currentCustomer.firstName}</Typography>
                    ) : (
                        <Typography>First Name: </Typography>
                    )}
                    {currentCustomer.lastName ? (
                        <Typography>Last Name: {currentCustomer.lastName}</Typography>
                    ) : (
                        <Typography>Last Name: </Typography>
                    )}
                    {currentCustomer.username ? (
                        <Typography>Username: {currentCustomer.username}</Typography>
                    ) : (
                        <Typography>Username: </Typography>
                    )}
                    {/* {currentCustomer.contactNumber ? (
                        <Typography>Password: {currentCustomer.password}</Typography>
                    ) : (
                        <Typography>Password: </Typography>
                    )} */}
                    {currentCustomer.email ? (
                        <Typography>Email: {currentCustomer.email}</Typography>
                    ) : (
                        <Typography>Email: </Typography>
                    )}
                    {currentCustomer.nearByPostOffice ? (
                        <Typography>Nearby Post Office: {currentCustomer.nearByPostOffice}</Typography>
                    ) : (
                        <Typography>Nearby Post Office: </Typography>
                    )}
                    {currentCustomer.domainName ? (
                        <Typography>Domain Name: {currentCustomer.domainName}</Typography>
                    ) : (
                        <Typography>Domain Name: </Typography>
                    )}
                    {currentCustomer.nationalIdNumber ? (
                        <Typography>National ID Number: {currentCustomer.nationalIdNumber}</Typography>
                    ) : (
                        <Typography>National ID Number: </Typography>
                    )}
                    {currentCustomer.permanentAddress ? (
                        <Typography>Permanent Address: {currentCustomer.permanentAddress}</Typography>
                    ) : (
                        <Typography>Permanent Address: </Typography>
                    )}
                    {currentCustomer.currentAddress ? (
                        <Typography>Current Address: {currentCustomer.currentAddress}</Typography>
                    ) : (
                        <Typography>Current Address: </Typography>
                    )}
                    {currentCustomer.thirdPartyAddress ? (
                        <Typography>Third Party Address: {currentCustomer.thirdPartyAddress}</Typography>
                    ) : (
                        <Typography>Third Party Address: </Typography>
                    )}
                </Stack>
            </Stack>
        </>
    )
        ;
}

export default CustomerDetails;
