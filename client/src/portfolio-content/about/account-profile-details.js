import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export const AccountProfileDetails = (props) => {
  return (
    <Card>
      <CardHeader
        sx={{ justifyContent: "center" }}
        subheader="A Chemical Engineer graduate who has transitioned into Software Engineering"
        title="Profile"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography align="left" variant="body2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am a passionate
              and highly motivated full stack developer with experience using
              frontend and backend technologies such as JavaScript, ReactJS,
              Bootstrap, Material-UI, Node, Ruby, Sinatra, and Rails. I am
              committed to writing clean, readable and scalable code!<br></br>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I graduated from
              New York University, where I received my bachelor’s degree in
              chemical engineering and immersed myself in mathematics, physics
              and engineering. I found my love for coding after college and wish
              to become a seasoned and professional software engineer!
              <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I have
              recently graduated from Flatiron School's 15 week immersive boot
              camp and would love to apply my problem solving and programming
              and team-oriented skill set to help clients and companies meet
              their goals.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" variant="contained">
          Go to projects!
        </Button>
      </Box>
    </Card>
  );
};
