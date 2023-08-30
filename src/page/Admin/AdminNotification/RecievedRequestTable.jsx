import {Button, Stack} from "@mui/material";
import {MaterialReactTable} from "material-react-table";
import {useEffect, useMemo, useState} from "react";
import ReplyRequest from "./ReplyRequest";
import axios from "../../../API/axios";

// axios.get("api/requests").then((res) => {
//   if(res.status === 200)
//   {
//     console.log(res.data);  
//     for(var i=0; i<res.data.length; i++)
//     {
//       dummyRequests.push(res.data[i]);
//     }
//   } 

// }).catch((err) => {
//   console.log(err);
// })

function ReceivedRequestTable() {
    const [open, setOpen] = useState(false);
    const [newRequests, setNewRequests] = useState([]);
    const [thisCustomer, setThisCustomer] = useState([null]);
    const [isReplied, setIsReplied] = useState(false);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get("/api/requests"); // Using relative path
                setNewRequests(response.data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };

        fetchRequests();
    }, []);

    const handleAcceptRequest = async (requestId) => {
        console.log(requestId);
        try {
            await axios.put(`/api/requests/accept/${requestId}`);
            // Handle success or update UI accordingly
        } catch (error) {
            console.error("Error accepting request:", error);
        }
    };

    const handleRejectRequest = async (requestId) => {
        try {
            await axios.put(`/api/requests/reject/${requestId}`);
            // Handle success or update UI accordingly
        } catch (error) {
            console.error("Error rejecting request:", error);
        }
    };

    const handleReplyRequest = async (requestId) => {
        try {
            await axios.put(`/api/requests/reply/${requestId}`);
            // Handle success or update UI accordingly
        } catch (error) {
            console.error("Error replying request:", error);
        }
    };


    const columns = useMemo(
        () => [
            {
                accessorKey: "userName",
                header: "Username",
                size: 50,
            },
            {
                accessorKey: "recievedDate", //normal accessorKey
                header: "Received Date",
                size: 50,
            },
            {
                header: "Accept",
                size: 50,
                Cell: ({cell, row}) => {
                    const requestId = row.original._id;
                    const requestAccepted = row.original.requestAccepted;

                    if (requestAccepted === "pending") {
                        return (
                            <Stack spacing={2} direction={"row"}>
                                <Button
                                    variant='contained'
                                    onClick={() => handleAcceptRequest(requestId)}
                                >
                                    Accept Request
                                </Button>
                                <Button
                                    color='warning'
                                    variant='outlined'
                                    onClick={() => handleRejectRequest(requestId)}
                                >
                                    Reject Request
                                </Button>
                            </Stack>
                        );
                    } else {
                        return requestAccepted; // Display the value if not "pending"
                    }
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
            {console.log("passing", thisCustomer)}
            <ReplyRequest open={open} setOpen={setOpen} currentCustomer={thisCustomer}/>

            <MaterialReactTable columns={columns} data={newRequests}/>
        </>
    );
}

export default ReceivedRequestTable;




