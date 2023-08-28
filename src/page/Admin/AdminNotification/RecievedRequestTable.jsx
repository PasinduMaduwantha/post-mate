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

    const columns = useMemo(
        () => [
            {
                accessorKey: "userId", //access nested data with dot notation
                header: "User ID",
                size: 50,
            },
            {
                accessorKey: "userName",
                header: "Username",
                size: 150,
            },
            {
                accessorKey: "receivedDate", //normal accessorKey
                header: "Received Date",
                size: 150,
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
                    return (
                        <Button onClick={() => setOpen(true)} variant='contained'>
                            Send
                        </Button>
                    );
                },
            },
        ],
        []
    );

    return (
        <>
            <ReplyRequest open={open} setOpen={setOpen} currentCustomer={newRequests}/>
            <MaterialReactTable columns={columns} data={newRequests}/>
        </>
    );
}

export default ReceivedRequestTable;




