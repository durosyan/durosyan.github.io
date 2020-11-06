import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Meta from '../common/meta.js';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Meta />
      <CssBaseline />
      <Container >
        <Typography component="div" style={{ backgroundColor: '#212121' }} >404</Typography>
      </Container>
    </React.Fragment>
  );
}
