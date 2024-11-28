import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
          <Typography style={{ color: "#FFF" }} variant="h5">
            Made with ❤️
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#FFF" variant="subtitle1">
              {`${new Date().getFullYear()} | HUKIBU`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
