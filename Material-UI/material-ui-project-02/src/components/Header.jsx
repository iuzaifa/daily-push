import { Box, Container, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{bgcolor : 'white', boxShadow : "none",  borderBottom: "1px solid #e0e0e0", color: "black"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography sx={{ fontWeight: 700 , textDecoration : 'none', color: "black" }}>Click</Typography>
          </Toolbar>



          {/* mobile menus  */}
          <Box sx={{  color: "balck", flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            lorem

          </Box>



        </Container>
      </AppBar>
    </>
  );
};

export default Header;
