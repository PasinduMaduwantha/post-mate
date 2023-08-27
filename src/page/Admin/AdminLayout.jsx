import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavBar from "../../components/NavBar/NavBar";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminHome from "./AdminHome/AdminHome";
import AdminNotification from "./AdminNotification/AdminNotification";
import AdminSettings from "./AdminSettings";

const drawerWidth = 240;

export default function AdminLayout() {
  const [currentScreen, setCurrentScreen] = React.useState("Home");

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar isUser={false} />
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          height={"100%"}
          bgcolor={"#1D566E"}
          marginTop={2}
          sx={{ overflow: "auto" }}
        >
          <List>
            {["Home", "Notification", "Setting"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => setCurrentScreen(text)}
                  sx={{ color: "white" }}
                >
                  <ListItemIcon>
                    {index === 0 && <HomeIcon sx={{ color: "white" }} />}
                    {index === 1 && (
                      <NotificationsActiveIcon sx={{ color: "white" }} />
                    )}
                    {index === 2 && <SettingsIcon sx={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Logout"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {currentScreen === "Home" && <AdminHome />}
        {currentScreen === "Notification" && <AdminNotification />}
        {currentScreen === "Setting" && <AdminSettings />}
      </Box>
    </Box>
  );
}
