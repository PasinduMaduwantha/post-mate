import {Box, Stack, Typography} from "@mui/material";
import postman from "../../images/26477469_postman_set_1 1.png";
import paperPlane from "../../images/Paper plane.png";
import CalculateLetterCost from "./CalculateLetterCost";

function PostalCost() {
    return (
        <>
            <Stack
                marginBottom={2}
                spacing={2}
                bgcolor={"white"}
                direction={"column"}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                    >
                        <Typography
                            marginBottom={2}
                            bgcolor={"#D9D9D9"}
                            paddingLeft={50}
                            paddingRight={50}
                            paddingTop={2}
                            paddingBottom={2}
                            borderRadius={2}
                            color={"#131485"} variant='h4'>
                            Postal Cost
                        </Typography>
                        <Typography>
                            find your postal cost according to letters' height and weight.
                        </Typography>
                    </Stack>
                    <img width={400} src={postman} alt=''/>
                </Stack>
                <Box height={10} bgcolor={"#131485"}></Box>

                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                    <Typography>
                        The postage on inland letters shall be prepaid by means of postage
                        stamps affixed or impressed by a stamping die or franking machine.
                    </Typography>

                    <Stack
                        direction='row'
                        justifyContent='space-evenly'
                        alignItems='center'
                        spacing={10}
                    >
                        <Stack
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            spacing={2}
                            bgcolor={"#F1D5DF"}
                            padding={2}
                            borderRadius={2}
                        >
                            <img width={60} src={paperPlane} alt=''/>
                            <Typography>Ordinary mail Rs 50.00</Typography>
                        </Stack>

                        <Stack
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            spacing={2}
                            bgcolor={"#F1D5DF"}
                            padding={2}
                            borderRadius={2}
                        >
                            <img width={60} src={paperPlane} alt=''/>
                            <Typography>Business mail Rs 50.00</Typography>
                        </Stack>
                    </Stack>

                    <Typography variant='h6' color={"#131485"}>
                        Calculate Letter Cost According to Weight
                    </Typography>

                    <CalculateLetterCost/>
                </Stack>
            </Stack>
            <Box marginBottom={6} height={20} bgcolor={"#131485"}></Box>
        </>
    );
}

export default PostalCost;
