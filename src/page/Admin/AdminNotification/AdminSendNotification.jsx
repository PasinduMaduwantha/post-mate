import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import useForm from "../../../Hooks/useForm";

function AdminSendNotification() {
  const getFreshModel = () => ({
    username: "",
    email: "",
    password: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const onSubmit = () => {};

  return (
    <>
      <Box
        borderColor={"#0001E4"}
        bgcolor={"#D9D9D9"}
        borderRadius={2}
        padding={4}
        width={"100%"}
      >
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography color={"#131485"} variant='h6'>
            Send Notification
          </Typography>
          <Stack spacing={2} direction={"column"}>
            <Stack spacing={2} direction={"row"}>
              <TextField
                id='outlined-basic'
                label='User Id'
                value={values.email}
                name='email'
                variant='outlined'
                onChange={handleInputChange}
              />
              <TextField
                id='outlined-basic'
                label='Username'
                variant='outlined'
                value={values.username}
                name='username'
                onChange={handleInputChange}
              />
            </Stack>
            <TextField
              id='outlined-basic'
              label='Sender Address'
              variant='outlined'
              value={values.username}
              name='username'
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Custom Message'
              variant='outlined'
              value={values.username}
              name='username'
              onChange={handleInputChange}
              multiline
            />
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Button onClick={onSubmit} variant='outlined'>
              Cancel
            </Button>
            <Button onClick={onSubmit} variant='contained'>
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default AdminSendNotification;
