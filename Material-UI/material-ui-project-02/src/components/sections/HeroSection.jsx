import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import ContactForm from "../ui/ContactForm";


const heroHeading = {
  fontSize: "40px",
  fontWeight: 900,
  textTransform: "uppercase",
  lineHeight: 1.2,
  letterSpacing: "1px",
};

const heroSubtitle = {
  mt: 2,
  maxWidth: "520px",
  color: "#555",
  lineHeight: 1.2,
  fontSize: `14px`,
};

const buttonStyle = {
  background: `#202020`,

};

const HeroSection = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{marginTop : `2.5rem`}}>
        <Grid container spacing={2} padding={5} sx={{display : `flex`, alignItems :" center"}}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography sx={heroHeading} variant="h1">
                We Are a Software Development Agency
              </Typography>
              <Typography variant="subtitle1" component={`p`} sx={heroSubtitle}>
                We build scalable, secure, and high-performance web and mobile
                applications using modern technologies to help businesses grow
                faster.
              </Typography>

              <Box sx={{padding : "30px 0", display : "flex", gap : `32px`}}>
                <Button variant="contained" sx={buttonStyle}>
                  More Info
                </Button>

                <Button variant="outlined" color="success">
                  More Info
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeroSection;
