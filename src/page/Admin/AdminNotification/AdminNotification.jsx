import {Stack, Typography} from "@mui/material";
import ReceivedRequestTable from "./RecievedRequestTable";
import PreviousRequestTable from "./PreviousRequestTable";
import AdminSendNotification from "./AdminSendNotification";
import AdminFeedbackTable from "./AdminFeddbackTable"

function AdminNotification() {
    return (
        <>
            <Stack spacing={2} padding={2} direction={"column"}>
                <Typography variant='h5' color={"#131485"}>
                    Notification
                </Typography>
                <Typography
                    padding={1}
                    bgcolor={"#D9D9D9"}
                    width={"100%"}
                    variant='h6'
                    color={"#131485"}
                    borderRadius={2}
                >
                    Received New Request
                </Typography>
                <ReceivedRequestTable/>

                <Stack spacing={2} direction={"row"}>
                    <PreviousRequestTable/>
                    <AdminSendNotification/>
                </Stack>
                <Stack spacing={2} direction={"row"}>
                    <AdminFeedbackTable/>
                </Stack>
            </Stack>
        </>
    );
}

export default AdminNotification;
