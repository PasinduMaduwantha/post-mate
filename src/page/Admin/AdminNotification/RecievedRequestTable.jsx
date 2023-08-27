import { Button, Stack } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { useMemo, useState } from "react";
import ReplyRequest from "./ReplyRequest";

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

function ReceivedRequestTable() {
  const [open, setOpen] = useState(false);
  const [newRequests, setNewRequests] = useState(dummyRequests);

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
        Cell: ({ cell, row }) => {
          return (
            <Stack spacing={2} direction={"row"}>
              <Button variant='contained'>Accept Request</Button>
              <Button color='warning' variant='outlined'>
                Reject Request
              </Button>
            </Stack>
          );
        },
      },
      {
        header: "Reply",
        size: 50,
        Cell: ({ cell, row }) => {
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
      <ReplyRequest open={open} setOpen={setOpen} />
      <MaterialReactTable columns={columns} data={newRequests} />
    </>
  );
}

export default ReceivedRequestTable;
