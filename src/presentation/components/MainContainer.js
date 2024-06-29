import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const SimpleContainer = ({children}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{paddingTop:'20px'}}>
        {children}
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;