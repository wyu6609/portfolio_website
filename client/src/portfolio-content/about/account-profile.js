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
  avatar:
    "https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/avatar.png?raw=true",
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
          pb: 9,
          elevation: 7,
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 240,
            mb: 4.4,
            width: 240,
            backgroundColor: "#ccc",
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h4">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.timezone}
        </Typography>
      </Box>
      {/* <Divider />
      <CardActions sx={{ justifyContent: "center" }}>
        <Typography>Fullstack Developer</Typography>
      </CardActions> */}
    </CardContent>
    <Divider />
  </Card>
);
