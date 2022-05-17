import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar: "../../images/avatar.png",
  city: "Brooklyn NY,",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "William Yu",
  timezone: "Eastern Time GMT-4",
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          src="https://willyu.netlify.app/assets/img/avatar.png"
          sx={{
            height: 240,
            mb: 4.4,
            width: 240,
            backgroundColor: "#ccc",
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.timezone}
        </Typography>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: "center" }}>
        <Typography>Fullstack Developer</Typography>
      </CardActions>
    </CardContent>
    <Divider />
  </Card>
);
