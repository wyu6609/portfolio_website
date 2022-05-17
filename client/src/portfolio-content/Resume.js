import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf";
import { Grid, Paper } from "@mui/material";

import "./Resume.css";
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Grid
      container
      xs={12}
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 7, minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <Paper variant="outlined"></Paper>
      </Grid>
    </Grid>
  );
};

export default Resume;
