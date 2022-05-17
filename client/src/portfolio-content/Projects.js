import React from "react";
import {
  Container,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import "./Project.css";

const cards = ["project1", "project2", "project3", "project4"];
const stackCards = [1, 2, 3, 4];
const Projects = () => {
  return (
    <Container
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ pb: 3, alignItems: "center" }}
      >
        Select a project to view!
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Card
              className="fancy_card"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "#eeeeee",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider />
    </Container>
  );
};

export default Projects;
