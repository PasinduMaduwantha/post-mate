import {Stack, Typography} from "@mui/material";
import axios from 'axios';
import React, {useEffect, useState} from "react";
import CustomersTable from "./CustomersTable";

function AdminHome() {
    const [counts, setCounts] = useState({
        customers: 0,
        inquiry: 0,
        requests: 0,
    });

    useEffect(() => {
        // Define the API endpoints
        const endpoints = [
            "http://localhost:5000/api/users/count",
            "http://localhost:5000/api/inqueries/count",
            "http://localhost:5000/api/requests/count",
        ];

        // Function to fetch data and update state
        const fetchData = async () => {
            try {
                const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
                const data = responses.map(response => response.data);

                // Update state with fetched data
                setCounts({
                    customers: data[0],
                    inquiry: data[1],
                    requests: data[2],
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures the effect runs only once


    return (
        <>
            <Stack spacing={2} margin={2} direction={"column"}>
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                    <Stack
                        borderRadius={2}
                        padding={3}
                        bgcolor={"#D0F8FF"}
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                    >
                        <Typography
                            borderRadius={2}
                            paddingLeft={6}
                            paddingRight={6}
                            paddingBottom={1}
                            paddingTop={1}
                            bgcolor={"#21ABA5"}
                            color={"#FFFFFF"}
                        >
                            Customer
                        </Typography>
                        <Typography fontWeight={500} variant='h3'>
                            {counts.customers}
                        </Typography>
                    </Stack>

                    <Stack
                        borderRadius={2}
                        padding={3}
                        bgcolor={"#910031"}
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                    >
                        <Typography
                            borderRadius={2}
                            paddingLeft={6}
                            paddingRight={6}
                            paddingBottom={1}
                            paddingTop={1}
                            bgcolor={"#F25900"}
                            color={"#FFFFFF"}
                        >
                            Inquiry
                        </Typography>
                        <Typography color={"white"} fontWeight={500} variant='h3'>
                            {counts.inquiry}
                        </Typography>
                    </Stack>

                    <Stack
                        borderRadius={2}
                        padding={3}
                        bgcolor={"#D0F8FF"}
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                    >
                        <Typography
                            borderRadius={2}
                            paddingLeft={6}
                            paddingRight={6}
                            paddingBottom={1}
                            paddingTop={1}
                            bgcolor={"#21ABA5"}
                            color={"#FFFFFF"}
                        >
                            Requests
                        </Typography>
                        <Typography fontWeight={500} variant='h3'>
                            {counts.requests}
                        </Typography>
                    </Stack>
                </Stack>

                <CustomersTable/>
            </Stack>
        </>
    );
}

export default AdminHome;
