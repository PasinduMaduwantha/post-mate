import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,

        bottom: 0,
        width: "100%",
        marginTop: 3,
      }}
    >
      <Container maxWidth='lg'>
        <Stack direction={"row"}>
          <Stack direction={"row"}>
            <img src={logo} />
            <Typography>
              Experience efficient and reliable mail services tailored to your
              needs at our trusted post service
            </Typography>
          </Stack>

          <Stack direction={"column"}>
            <Typography variant='h6'>Our Links</Typography>
            <Typography>Home</Typography>
            <Typography>About Us</Typography>
            <Typography>Services</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Help</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
