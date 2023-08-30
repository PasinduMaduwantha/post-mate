import {Stack, Typography} from "@mui/material";
import {MaterialReactTable} from "material-react-table";
import {useEffect, useMemo, useState} from "react";

import axios from '../../../API/axios'

const dummyRequests = [
    {
        userId: 1,
        userName: "alice123",
        senderAddress: "sender@example.com",
        message: "Hello, how are you?",
        requestStatus: "pending",
        replyStatus: "not replied",
        replyMessage: "",
        receivedDate: "2023-08-27",
    },
    {
        userId: 2,
        userName: "bob456",
        senderAddress: "sender2@example.com",
        message: "Hey there!",
        requestStatus: "approved",
        replyStatus: "replied",
        replyMessage: "I'm doing well, thank you!",
        receivedDate: "2023-08-26",
    },
    {
        userId: 3,
        userName: "charlie789",
        senderAddress: "sender3@example.com",
        message: "Need some help with the project.",
        requestStatus: "approved",
        replyStatus: "replied",
        replyMessage: "Sure, I'd be happy to help!",
        receivedDate: "2023-08-25",
    },
    {
        userId: 4,
        userName: "david101",
        senderAddress: "sender4@example.com",
        message: "Important update regarding the event.",
        requestStatus: "pending",
        replyStatus: "not replied",
        replyMessage: "",
        receivedDate: "2023-08-24",
    },
    {
        userId: 5,
        userName: "eve2023",
        senderAddress: "sender5@example.com",
        message: "Invitation for the conference.",
        requestStatus: "approved",
        replyStatus: "replied",
        replyMessage: "Thank you, I'll be attending!",
        receivedDate: "2023-08-23",
    },
];

function PreviousRequestTable() {
    // const [newRequests, setNewRequests] = useState(dummyRequests);

    const [newRequests, setNewRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get("/api/userfeedback"); // Using relative path
                setNewRequests(response.data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };

        fetchRequests();
    }, []);


    const columns = useMemo(
        () => [
            {
                accessorKey: "userName",
                header: "Username",
                size: 50,
            },
            {
                accessorKey: "address", //normal accessorKey
                header: "Address",
                size: 50,
            },
            {
                accessorKey: "message", //normal accessorKey
                header: "Inquery Message",
                size: 50,
            },
            {
                accessorKey: "createdAt", //normal accessorKey
                header: "Created Date",
                size: 50,
            },
        ],
        []
    );

    return (
        <>
            <Stack direction={"column"}>
                <Typography
                    marginBottom={2}
                    padding={1}
                    bgcolor={"#D9D9D9"}
                    width={"100%"}
                    variant='h6'
                    color={"#131485"}
                    borderRadius={2}
                >
                    User Feedback
                </Typography>
                <MaterialReactTable columns={columns} data={newRequests}/>
            </Stack>
        </>
    );
}

export default PreviousRequestTable;
