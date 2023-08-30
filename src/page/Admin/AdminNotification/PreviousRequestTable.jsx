import {Button, IconButton, Stack, Typography} from "@mui/material";
import {MaterialReactTable} from "material-react-table";
import {useMemo, useState, useEffect} from "react";

import axios from '../../../API/axios'
import ReplyRequest from "./ReplyRequest";
import CustomerDetails from "../AdminHome/CustomerDetails";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InqueryModal from "./InqueryModal";
import ReplyInquery from "./ReplyInquery";

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
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [newRequests, setNewRequests] = useState([]);
    const [thisCustomer, setThisCustomer] = useState([null]);
    const [isReplied, setIsReplied] = useState(false);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get("/api/inqueries"); // Using relative path
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
                header: "Actions",
                size: 50,
                Cell: ({cell, row}) => {
                    return (
                        <IconButton onClick={() => {
                            setOpenModal(true);
                            setThisCustomer(row.original)
                        }}>
                            <OpenInNewIcon/>
                        </IconButton>
                    );
                },
            },
            {
                header: "Reply",
                size: 50,
                Cell: ({cell, row}) => {
                    // console.log("row ", row, cell)
                    const reply = row.original.requestReplied;
                    setIsReplied(reply);

                    return (
                        <>
                            {!reply && (
                                <Button
                                    onClick={() => {
                                        setOpen(true);
                                        // console.log("row ", row)
                                        setThisCustomer(row.original);
                                        // handleReplyRequest(row.original._id)
                                        // console.log("thisCustomer", thisCustomer);
                                    }} variant='contained'
                                >
                                    Send
                                </Button>

                            )}
                            {reply && (<Button variant="contained">Replied</Button>)}
                        </>
                    );
                },
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
                    Inquires
                </Typography>
                <Stack spacing={2} direction={"row"}>
                    <ReplyInquery open={open} setOpen={setOpen} currentCustomer={thisCustomer}/>
                    <MaterialReactTable columns={columns} data={newRequests}/>
                    <InqueryModal open={openModal} setOpen={setOpenModal} currentCustomer={thisCustomer}/>
                </Stack>
            </Stack>
        </>
    );
}

export default PreviousRequestTable;
