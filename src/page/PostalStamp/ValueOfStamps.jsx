import {Stack, Typography} from "@mui/material";

function ValueOfStamps() {
    return (
        <>
            <Stack direction={"column"}>
                <Typography
                    color={"white"}
                    padding={2}
                    marginTop={2}
                    marginBottom={2}
                    bgcolor={"#131485"}
                    borderRadius={2}
                    variant='h6'
                >
                    Value of Stamps
                </Typography>
                <Typography padding={2}>
                    Stamps sold by the Post Office are of the following values:-
                </Typography>
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={10}
                >
                    <Stack direction={"column"}>
                        <Typography>
                            Rs. 1.00
                            <br/> Rs. 2.00
                            <br/> Rs. 2.50
                            <br/> Rs. 3.00
                            <br/> Rs. 3.50
                        </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                        <Typography>
                            Rs. 4.00
                            <br/> Rs. 4.50
                            <br/> Rs. 5.00
                            <br/> Rs. 10.00
                            <br/> Rs. 13.50
                        </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                        <Typography>
                            Rs. 16.50
                            <br/> Rs. 17.00
                            <br/> Rs. 18.00
                            <br/> Rs. 20.00
                            <br/> Rs. 23.00
                        </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                        <Typography>
                            Rs. 25.00
                            <br/> Rs. 26.00
                            <br/> Rs. 30.00
                            <br/> Rs. 33.00
                            <br/> Rs. 40.00
                        </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                        <Typography>
                            Rs. 50.00
                            <br/> Rs. 100.00
                            <br/> Rs. 200.00
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default ValueOfStamps;
