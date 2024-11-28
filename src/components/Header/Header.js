import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

theme.typography.logo = {
    fontSize: '1.2rem',
    color: '#11D9C5',
    fontWeight: '600',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

  theme.typography.home = {
    fontSize: '1.2rem',
    color: '#FFF',
    fontWeight: '600',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

export const Header = () =>
{ 
   return (
    <Box>     
    <Grid container padding={"20px 100px"}>
    <ThemeProvider theme={theme}>
      <Grid xs={8} textAlign={'left'}>
      <Typography variant="logo">HUKIBU</Typography>
      </Grid>
      <Grid xs={4} textAlign={'right'}>
      <Typography variant="home">Home</Typography>      
      </Grid>
      </ThemeProvider>
    </Grid>
    </Box>
   )
}
