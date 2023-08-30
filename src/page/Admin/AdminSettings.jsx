import {Avatar, Stack, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import React, {useEffect, useState} from "react";

function AdminSettings() {

    const [user, setUser] = useState("");

    useEffect(() => {
        const userJSON = localStorage.getItem("user");

        if (userJSON) {
            console.log("User JSON:")
            try {
                // Parse the JSON string into a JavaScript object
                const userObject = JSON.parse(userJSON);

                // Set the username in the state
                setUser(userObject);
            } catch (error) {
                console.error("Error parsing user JSON:", error);
            }
        }
        console.log(user);
    }, []);

    return (
        <>
            <Stack direction={"column"} spacing={2} padding={2}>
                <Typography color={"#00424C"} variant='h5'>
                    Settings
                </Typography>

                <Stack direction={"column"} padding={2} spacing={2}>
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}
                    >
                        <Avatar
                            sx={{bgcolor: deepOrange[500], width: 56, height: 56}}
                            alt='Remy Sharp'
                            src='/broken-image.jpg'
                        />
                        <Typography color={"#00424C"} variant='h6'>
                            Profile
                        </Typography>
                    </Stack>
                    <Typography color={"#131485"}>First Name : {user.firstName || "John"}</Typography>
                    <Typography color={"#131485"}>Last Name : {user.lastName || "Doe"}</Typography>

                    <Typography color={"#131485"}>User Name : {user.username || "johndoe"}</Typography>
                    {/* <Typography color={"#131485"}>User Id : 01552</Typography> */}
                    <Typography color={"#131485"}>
                        Email Address : {user.email || "johndoe@gmail.com"}
                    </Typography>
                    {/* <Typography color={"#131485"}>
            Designation : Provincial Manager
          </Typography> */}
                </Stack>
            </Stack>
        </>
    );
}

export default AdminSettings;
