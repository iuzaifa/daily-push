import React from "react";
import HeroSection from "../components/sections/HeroSection";
import PaltefromSection from "../components/sections/PaltefromSection";
import FeatureModule from "../components/sections/FeatureModule";
import { Box, Grid } from "@mui/material";
import OfficeActions from "../components/sections/OfficeActions";
import Detection from "../components/sections/Detection";
import Testomonial from "../components/sections/Testomonial";
import Security from "../components/sections/Security";

const Home = () => {
  return (
    <>
      <Grid
        container
        maxWidth={`xl`}
        component={`div`}
        sx={{ flexDirection: "column", margin: "auto" }}
      >
        <Box>
          <HeroSection />
        </Box>
        <Box>
          <PaltefromSection />
        </Box>
        <Box>
          <FeatureModule />
        </Box>
        <Box>
          <OfficeActions />
        </Box>
        <Box>
          <Detection />
        </Box>
        <Box>
          <Testomonial />
        </Box>
        <Box sx={{ background: "#101010", color: "#fff", my: "50px " }}>
          <Security />
        </Box>
      </Grid>
    </>
  );
};

export default Home;
