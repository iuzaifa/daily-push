import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ServiceSection from "../components/sections/ServiceSection";
import PaltefromSection from "../components/sections/PaltefromSection";
import FeatureModule from "../components/sections/FeatureModule";
import { Box, Grid } from "@mui/material";

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
      </Grid>
    </>
  );
};

export default Home;
