import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "../../Hooks/useForm";
import frame from "../../images/Frame.png";
import mailSent from "../../images/29630388_2206_w023_n003_2530b_p1_2530 1.png";

const Contact = () => {
  const getFreshModel = () => ({
    userName: "",
    address: "",
    phoneNumber: "",
    message: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const onSendClick = () => {};

  return (
    <>
      <NavBar />
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        marginTop={16}
      >
        <Typography color={"#131485"} variant='h4'>
          Contact Us
        </Typography>
        <Typography>If you want to contact us, leave a message</Typography>
        <Stack
          borderRadius={2}
          borderColor={"#131485"}
          border={2}
          padding={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={3}
        >
          <Stack spacing={2} direction={"column"}>
            <Typography
              bgcolor={"#131485"}
              borderRadius={2}
              padding={2}
              width={"100%"}
              color={"white"}
              variant='h7'
              align='center'
            >
              Send Message
            </Typography>
            <TextField
              id='outlined-basic'
              label='Full Name'
              variant='outlined'
              name='userName'
              value={values.userName}
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              name='senderAddress'
              value={values.senderAddress}
              onChange={handleInputChange}
            />

            <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              name='message'
              value={values.message}
              onChange={handleInputChange}
            />

            <TextField
              id='outlined-basic'
              label='Message'
              variant='outlined'
              name='message'
              value={values.message}
              onChange={handleInputChange}
            />

            <Button variant='contained' onClick={onSendClick}>
              Submit
            </Button>
          </Stack>
          <img style={{ marginLeft: 100 }} width={300} src={mailSent} />
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Contact;
