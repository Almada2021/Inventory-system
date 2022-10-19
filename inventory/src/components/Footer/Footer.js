import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Container = styled(Grid)( ( {theme } ) => ({
  backgroundColor: theme.palette.primary.blue,
  padding: "30px",
}));
function Footer() {
  return (
    <Container container spacing={2}>
      <Grid item xs={4} md={4}>
        <li>ge</li>
        <li>ge</li>
        <li>ge</li>
        <li>ge</li>
      </Grid>
      <Grid item xs={4} md={4}>
        <li>ge</li>
        <li>ge</li>
        <li>ge</li>
        <li>ge</li>
      </Grid>
      <Grid item xs={4} md={4}>
        <li>ge</li>
        <li>ge</li>
        <li>ge</li>
        <li>ge</li>
      </Grid>
      <Grid item xs={12}>
        copu
      </Grid>
    </Container>
  )
}

export default Footer