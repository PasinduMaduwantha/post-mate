import AuthForm from "../../components/Auth/AuthForm";

import ServiceCard from "../Services/ServiceCard";
import imageOne from "../../images/a.png";
import imageTwo from "../../images/Isolation_Mode(1).png";
import imageThree from "../../images/Isolation_Mode.png";
import imageFour from "../../images/Isolation_Mode(2).png";
import { Stack,Typography, Button, TextField} from "@mui/material";
import stampCollection from "../../images/world-post-office-day-national-post-day-generative-ai (1) 1.png";
import frame from "../../images/Frame.png";
import mailSent from "../../images/mcs.png";
import "./home.css";
import axios from "../../API/axios"
import { toast } from "react-hot-toast";
import useForm from "../../Hooks/useForm";
import LoginMessageSection from "../LoginMessageSection/LoginMessageSection";
import Footer from "../../components/Footer/Footer";
import AppBar from "@mui/material/AppBar";
import logo from "../../images/logo.png";



export default function Home() {

  const getFreshModel = () => ({
    userName: "",
    address: "",
    message: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);


    const onSendClick = () => {

      axios.post('/api/userfeedback', values)
      .then(response => {
              console.log(response)
          if (response.status === 200) {
              toast.success('Add successful!');
              setValues(getFreshModel)
    
          } else {
              toast.error('Invalid credentials. Please try again.');
          }
          })
          .catch(error => {
          console.error('Error during login:', error);
          toast.error('Something went wrong .');
          })
    
    };

  return (
    <>
    <AppBar
      sx={{ marginBottom: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{ background: "#EFE7FA" }}
      position='fixed'
      elevation={0}
    >
      <img style={{ maxWidth: 120 }} src={logo} />
    </AppBar>
      {/* <NavBar isUser={true} /> */}
      {/* <div className='home-background'> */}
        {/* <div className='home-background-wrap'> */}
          {/* <AuthForm /> */}
          <LoginMessageSection />
          <Stack direction={"column"}>
        <Typography
          padding={2}
          marginTop={15}
          marginLeft={2}
          marginRight={2}
          marginBottom={2}
          bgcolor={" #F2590033"}
          borderRadius={2}
          variant='h4'
        >
          Who We Are
        </Typography>
        <Stack
          direction='row-reverse'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack direction={"column"} spacing={2}>
          <Typography marginLeft={10} variant={"h6"} width={"50%"}>
            Experience efficient and reliable mail services tailored to your
            needs at our trusted post service . 
            </Typography>

            <Typography marginLeft={4} variant={"h6"} width={"50%"}>

            Experience efficient and
            reliable mail services tailored to your needs at our trusted post
            service .Experience efficient and reliable mail services tailored.
          </Typography>
          </Stack>
          <img width={"100%"} src={stampCollection} alt='' />
        </Stack>
      </Stack>
      <Stack direction={"column"}>
        <Typography
          padding={2}
          marginTop={15}
          marginLeft={2}
          marginRight={2}
          marginBottom={2}
          bgcolor={" #F2590033"}
          borderRadius={2}
          variant='h4'
        >
          Our Services
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack direction={"column"} spacing={2}>
            <ServiceCard
              title={"Postal Code Lookup"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageOne}
            />
            <ServiceCard
              title={"Postal Cost"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageTwo}
            />
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <ServiceCard
              title={"Received Letter Tracker"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageThree}
            />
            <ServiceCard
              title={"Post Stamp"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageFour}
            />
          </Stack>
        </Stack>
      </Stack>
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
        <Typography variant='h6'>If you want to contact us, leave a message</Typography>
        <Stack
          borderRadius={2}
          borderColor={"#131485"}
          border={2}
          padding={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={1}
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
              Send Feedback
            </Typography>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              name='userName'
              value={values.userName}
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Address'
              variant='outlined'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />

            {/* <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={handleInputChange}
            /> */}

            <TextField
              id='outlined-basic'
              label='Message'
              variant='outlined'
              name='message'
              value={values.message}
              onChange={handleInputChange}
            />

            <Button variant='contained' onClick={onSendClick}>
              Submit Feedback
            </Button>
          </Stack>

          <img
            style={{ marginLeft: 50, borderRadius: 20 }}
            width={400}
            src={mailSent}
          />
        </Stack>
      </Stack>
        {/* </div> */}
      {/* </div> */}
      <Footer />
    </>
  );
}
