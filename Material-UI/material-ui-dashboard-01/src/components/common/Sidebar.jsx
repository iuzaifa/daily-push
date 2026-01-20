import { Drawer, List, ListItem, ListItemIcon, Toolbar, ListItemText, ListItemButton } from '@mui/material'
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import React from 'react'
import { href } from 'react-router-dom';

const drawerWidth = 280;

const sidebarData  = [
  { title : "Home", href : "/", icone : <AnalyticsRoundedIcon/> }
]


const Sidebar = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          background: "#f5f6fa",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />

        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                px: "5px",
                py: "2px",
                borderRadius: "5px",
                border: "1px solid #7B8396",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#f7f9ff", // bg
                  borderColor: "#f9f9f9", // border
                  // icon
                  "& .MuiSvgIcon-root": {
                    color: "#191921",
                  },

                  // text
                  "& .MuiTypography-root": {
                    color: "#191921",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "#7B8396", minWidth: "28px" }}>
                <HomeRoundedIcon sx={{ fontSize: 18, color: "#7B8396" }} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontSize: 13, fontWeight: 500, color: "#7B8396" },
                  },
                }}
                primary={`Home`}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: "5px", py: "2px", borderRadius: "5px" }}>
              <ListItemIcon sx={{ color: "#7B8396", minWidth: "28px" }}>
                <AnalyticsRoundedIcon sx={{ fontSize: 18, color: "#7B8396" }} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontSize: 13, fontWeight: 500, color: "#7B8396" },
                  },
                }}
                primary={`Analytics`}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: "5px", py: "2px", borderRadius: "5px" }}>
              <ListItemIcon sx={{ color: "#7B8396", minWidth: "28px" }}>
                <GroupRoundedIcon sx={{ fontSize: 18, color: "#7B8396" }} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontSize: 13, fontWeight: 500, color: "#7B8396" },
                  },
                }}
                primary={`Client's`}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: "5px", py: "2px", borderRadius: "5px" }}>
              <ListItemIcon sx={{ color: "#7B8396", minWidth: "28px" }}>
                <AssignmentRoundedIcon
                  sx={{ fontSize: 18, color: "#7B8396" }}
                />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontSize: 13, fontWeight: 500, color: "#7B8396" },
                  },
                }}
                primary={`Task`}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar