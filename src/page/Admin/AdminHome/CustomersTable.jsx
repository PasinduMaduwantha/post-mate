import { Button, IconButton, Stack, Typography } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { useMemo, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CustomerDetails from "./CustomerDetails";
import AddCustomerForm from "./AddCustomerForm";

const dummyCustomers = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    userName: "alice123",
    password: "securepass",
    email: "alice@example.com",
    nearbyPostOffice: "Central Post Office",
    domainName: "alicecorp",
    nationalIDNumber: "1234567890",
    permanentAddress: "123 Main Street, City A",
    currentAddress: "456 Elm Avenue, City B",
    thirdPartyAddress: "789 Oak Lane, City C",
    hasLetter: true,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    userName: "bobsmith",
    password: "strongpass",
    email: "bob@example.com",
    nearbyPostOffice: "Downtown Post Office",
    domainName: "bobinc",
    nationalIDNumber: "9876543210",
    permanentAddress: "987 Pine Road, City X",
    currentAddress: "654 Cedar Street, City Y",
    thirdPartyAddress: "321 Birch Court, City Z",
    hasLetter: false,
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Brown",
    userName: "charlie87",
    password: "brownie",
    email: "charlie@example.com",
    nearbyPostOffice: "Suburb Post Office",
    domainName: "charlieco",
    nationalIDNumber: "5678901234",
    permanentAddress: "567 Willow Lane, City M",
    currentAddress: "890 Maple Road, City N",
    thirdPartyAddress: "123 Pine Court, City P",
    hasLetter: true,
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Miller",
    userName: "davidm",
    password: "davypass",
    email: "david@example.com",
    nearbyPostOffice: "Rural Post Office",
    domainName: "davidcorp",
    nationalIDNumber: "3456789012",
    permanentAddress: "345 Elm Street, City Q",
    currentAddress: "678 Oak Avenue, City R",
    thirdPartyAddress: "901 Birch Road, City S",
    hasLetter: false,
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Williams",
    userName: "evaw",
    password: "evapass",
    email: "eva@example.com",
    nearbyPostOffice: "Coastal Post Office",
    domainName: "evacorp",
    nationalIDNumber: "7890123456",
    permanentAddress: "789 Cedar Lane, City T",
    currentAddress: "012 Willow Avenue, City U",
    thirdPartyAddress: "345 Maple Court, City V",
    hasLetter: true,
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Davis",
    userName: "frankie",
    password: "davispass",
    email: "frank@example.com",
    nearbyPostOffice: "Mountain Post Office",
    domainName: "frankcorp",
    nationalIDNumber: "2345678901",
    permanentAddress: "234 Pine Road, City W",
    currentAddress: "567 Elm Street, City X",
    thirdPartyAddress: "890 Oak Avenue, City Y",
    hasLetter: false,
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Jackson",
    userName: "gracej",
    password: "jacksonpass",
    email: "grace@example.com",
    nearbyPostOffice: "Desert Post Office",
    domainName: "gracecorp",
    nationalIDNumber: "9012345678",
    permanentAddress: "901 Willow Lane, City Z",
    currentAddress: "234 Cedar Road, City A",
    thirdPartyAddress: "567 Maple Court, City B",
    hasLetter: true,
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Moore",
    userName: "henrym",
    password: "moorepass",
    email: "henry@example.com",
    nearbyPostOffice: "Urban Post Office",
    domainName: "henryco",
    nationalIDNumber: "6789012345",
    permanentAddress: "678 Oak Lane, City C",
    currentAddress: "901 Pine Avenue, City D",
    thirdPartyAddress: "234 Willow Road, City E",
    hasLetter: false,
  },
  {
    id: 9,
    firstName: "Isabella",
    lastName: "Taylor",
    userName: "isabellat",
    password: "taylorpass",
    email: "isabella@example.com",
    nearbyPostOffice: "Suburb Post Office",
    domainName: "isabellacorp",
    nationalIDNumber: "1234567890",
    permanentAddress: "123 Maple Street, City F",
    currentAddress: "456 Cedar Lane, City G",
    thirdPartyAddress: "789 Pine Avenue, City H",
    hasLetter: true,
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Walker",
    userName: "jackw",
    password: "walkerpass",
    email: "jack@example.com",
    nearbyPostOffice: "Rural Post Office",
    domainName: "jackinc",
    nationalIDNumber: "9876543210",
    permanentAddress: "987 Elm Road, City I",
    currentAddress: "654 Willow Lane, City J",
    thirdPartyAddress: "321 Cedar Avenue, City K",
    hasLetter: false,
  },
];

function CustomersTable() {
  const [customers, setCustomers] = useState(dummyCustomers);
  const [currentCustomer, setCurrentCustomer] = useState(customers[0]);
  const [open, setOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "Id",
        size: 50,
      },
      {
        accessorKey: "userName",
        header: "Username",
        size: 150,
      },
      {
        accessorKey: "domainName", //normal accessorKey
        header: "Domain",
        size: 150,
      },
      {
        header: "Actions",
        size: 50,
        Cell: ({ cell, row }) => {
          return (
            <IconButton onClick={() => setCurrentCustomer(row.original)}>
              <OpenInNewIcon />
            </IconButton>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      {currentCustomer && <AddCustomerForm open={open} setOpen={setOpen} />}
      <Stack
        padding={2}
        borderRadius={2}
        bgcolor={"#1314850A"}
        direction={"column"}
      >
        <Typography color={"#00424C"} variant='h6'>
          Customers
        </Typography>
        <Stack spacing={2} direction={"row"}>
          <Stack spacing={2} direction={"column"}>
            <Button onClick={() => setOpen(true)} variant='contained'>
              New Customer
            </Button>
            <MaterialReactTable columns={columns} data={customers} />
          </Stack>
          <CustomerDetails currentCustomer={currentCustomer} />
        </Stack>
      </Stack>
    </>
  );
}

export default CustomersTable;
