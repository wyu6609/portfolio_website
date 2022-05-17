import React from "react";
import { Grid, Paper } from "@mui/material";

const Resume = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Paper variant="outlined">
          <a>
            <img src="" />
          </a>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Resume;
