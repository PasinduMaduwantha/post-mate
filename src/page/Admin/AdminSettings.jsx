import { Avatar, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function AdminSettings() {
  return (
    <>
      <Stack direction={"column"} spacing={2} padding={2}>
        <Typography color={"#00424C"} variant='h5'>
          Settings
        </Typography>

        <Stack direction={"column"} padding={2} spacing={2}>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={2}
          >
            <Avatar
              sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
              alt='Remy Sharp'
              src='/broken-image.jpg'
            />
            <Typography color={"#00424C"} variant='h6'>
              Profile
            </Typography>
          </Stack>
          <Typography color={"#131485"}>User Name : JohnDoe</Typography>
          <Typography color={"#131485"}>User Id : 01552</Typography>
          <Typography color={"#131485"}>
            Email Address : johndoe@postal.lk
          </Typography>
          <Typography color={"#131485"}>Contact Number : 0718527569</Typography>
          <Typography color={"#131485"}>
            Designation : Provincial Manager
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default AdminSettings;
