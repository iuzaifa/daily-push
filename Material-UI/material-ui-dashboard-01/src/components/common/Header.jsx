import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Header = ({ onMenuClick, collapsed }) => {
  return (
    <>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar>
          <IconButton edge="start" onClick={onMenuClick}>
            {!collapsed ? <FormatAlignLeftRoundedIcon /> : <ArrowForwardRoundedIcon />}
          </IconButton>

          <Typography variant="h6" sx={{ ml: 2 }}>
            CRM Dashboard
          </Typography>


        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header