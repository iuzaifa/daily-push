import { Container } from '@mui/material'
import React from 'react'

const MainFrame = ({ children, ...props }) => {
  return (
    <>
      <Container sx={{border : "1px solid #d4d2ff", p : 2 , margin : 0}} maxWidth={false} disableGutters {...props}>
        {children}
      </Container>
    </>
  );
};

export default MainFrame