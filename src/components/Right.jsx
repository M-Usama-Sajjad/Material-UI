import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Notifications,
  Subscriptions,
  Phone,
  Sms,
  Security,
  PhoneAndroid,
  Backup,
  ArrowBack,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const useStyles = makeStyles({
  paperGradient: {
    padding: "16px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(to bottom, #d030c5, #586eee)",
    color: "white",
    height: "70px",
  },
  iconButton: {
    marginTop: "40px",
  },
  settingsText: {
    marginLeft: "16px",
    marginTop: "6px",
    color: "white",
  },
  paper: {
    padding: "16px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    marginTop: "-13px",
    height: "60px",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  userName: {
    fontWeight: "bold",
  },
  userStatus: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#9e9e9e",
    fontSize: "0.75rem",
  },
  listItemIcon: {
    background: "linear-gradient(to bottom, #d030c5, #586eee)",
    margin: "5px",
    marginRight: "10px",
    height: "22px",
    width: "24px !important",
    color: "white",
  },
  listItemText: {
    color: "#616161",
  },
  arrowBack: {
    color: "white",
    marginTop: "40px",
  },
  settings: {
    paddingTop: "38px",

    color: "white",
    paddingLeft: "6px",
  },
  list: {
    background: "white",
  },
  available: {
    fontWeight: "300 !important",
    fontSize: "0.7rem !important ",
    margin: "5px !important",
  },
});

const Right = () => {
  const classes = useStyles();
  const settings = [
    { text: "My Number", icon: <PhoneAndroid className="!text-[1.2rem]" /> },
    {
      text: "Subscriptions",
      icon: <Subscriptions className="!text-[1.2rem]" />,
    },
    { text: "Call Handling", icon: <Phone className="!text-[1.2rem]" /> },
    { text: "SMS Settings", icon: <Sms className="!text-[1.2rem]" /> },
    { text: "Security", icon: <Security className="!text-[1.2rem]" /> },
    { text: "Backup", icon: <Backup className="!text-[1.2rem]" /> },
    {
      text: "Notifications",
      icon: <Notifications className="!text-[1.2rem]" />,
    },
  ];
  return (
    <Grid md={2.5} sx={{}}>
      <Paper className={classes.paperGradient}>
        <IconButton className={classes.iconButton}>
          <ArrowBack className={classes.arrowBack} />
          <Typography className={classes.settings}>Settings</Typography>
        </IconButton>
      </Paper>
      <Paper className={classes.paper}>
        <Box className={classes.avatarContainer}>
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Box>
            <Typography variant="" className={classes.userName}>
              Lindsey Smith
            </Typography>
            <Box className={classes.userStatus}>
              <FiberManualRecordIcon
                style={{ color: "green", fontSize: "10px" }}
              />
              <Typography className={classes.available}>Available</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <List
        className={classes.list}
        sx={{ marginTop: "-15px", height: "522px" }}
      >
        {settings.map((setting, index) => (
          <ListItem key={index}>
            <Box className={classes.listItemIcon}>{setting.icon}</Box>
            <ListItemText
              className={classes.listItemText}
              primary={setting.text}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Right;
