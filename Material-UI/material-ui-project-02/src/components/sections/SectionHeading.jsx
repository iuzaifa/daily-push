import React from 'react'
import { Typography } from "@mui/material";

const SectionHeading = ({heading}) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 300,
          fontFamily: "emoji",
          textTransform: `capitalize`,
        }}
      >
        {heading}
      </Typography>
    </>
  );
}

export default SectionHeading