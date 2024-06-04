import {
  AttachFile,
  AttachFileOutlined,
  CalendarMonth,
  EmojiEmotions,
  Mic,
  MoreVert,
  Phone,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  Grid,
  Toolbar,
  Typography,
  Paper,
  Box,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paper: {
    padding: "32px",
    height: "50%",
    overflowY: "scroll",
    "&::-webkit-scrollbar": { display: "none" },
    margin: "1px",
    borderRadius: "2px",
    height: "508px",
  },
  user1: {
    marginRight: "auto",
    fontWeight: 600,
    padding: "10px",

    width: "max-content",
    backgroundColor: "#E5E7EB",
    color: "black",
    borderRadius: "50px",
    maxWidth: "50%",
  },

  you: {
    marginLeft: "auto",
    fontWeight: 600,
    padding: "10px",
    px: 5,
    width: "max-content",
    color: "white",
    borderRadius: "50px 50px 0px 50px",
    background: "linear-gradient(to bottom, #d030c5, #586eee)",
  },
  toolbar1: {
    margin: "1px",
    backgroundColor: "white",
    borderRadius: "2px",
    height:"75px"
  },
  toolbar2: {
    backgroundColor: "white",
    margin: "1px",
    height: "84px",
  },
  typography1: {
    fontWeight: "bold !important",
    margin: "16px !important",
    flexGrow: 1,
    height:"4px"
  },
  typography2: {
    fontSize: "0.75rem !important",
    fontWeight: "100 !important",
    marginLeft: "15px !important" 
  },
  typography3: {
    fontSize: "10px !important",
    fontWeight: "fontWeightMedium",
    textAlign: "right",
  },
  stack: {
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    flexGrow: 1,
    margin: "5px",
  },
  iconbutton: {
    background: "linear-gradient(to bottom, #d030c5, #586eee)",
    color: "white !important",
    marginLeft: "10px !important",
  },
  textfield: {
    backgroundColor: "#E5E7EB",
    flexGrow: 1,
    borderRadius: "10px !important",
  },
});

const Chat = () => {
  const classes = useStyles();

  const [messages, setMessages] = useState([
    {
      sender: "User 1",
      text: "Hey there! How's it going?",
      timestamp: "10:00 AM",
    },
    {
      sender: "You",
      text: "Hi! I'm doing fine, thanks for asking.",
      timestamp: "10:05 AM",
    },
    {
      sender: "You",
      text: "Yes, I did! It was intense!",
      timestamp: "10:15 AM",
    },
    {
      sender: "User 1",
      text: "That's good to hear. Did you see the game last night?",
      timestamp: "10:10 AM",
    },
    { sender: "You", text: "Yeah, it was unexpected!", timestamp: "10:25 AM" },
    {
      sender: "User 1",
      text: "Right? I couldn't believe the outcome!",
      timestamp: "10:20 AM",
    },
    {
      sender: "User 1",
      text: "So, what are your plans for the weekend?",
      timestamp: "10:30 AM",
    },
    {
      sender: "You",
      text: "I'm thinking of going hiking. How about you?",
      timestamp: "10:35 AM",
    },
    {
      sender: "User 1",
      text: "I might catch up on some reading.",
      timestamp: "10:40 AM",
    },
    { sender: "You", text: "Sounds relaxing!", timestamp: "10:45 AM" },
    { sender: "User 1", text: "Yeah, it should be.", timestamp: "10:50 AM" },
  ]);

  return (
    <Grid md={7}>
      <Toolbar className={classes.toolbar1}>
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box sx={{flexGrow:1}}>
          <Typography className={classes.typography1}>Lindsey Smith</Typography>
          <Typography
            variant=""
            className={classes.typography2}
            sx={{ }}
          >
            last seen at 2:34 PM
          </Typography>
          </Box>

        <Phone sx={{color:"gray"}} />
        <MoreVert sx={{color:"gray"}}/>
      </Toolbar>
      <Paper className={classes.paper}>
        <Box>
          {messages.map((message, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box
                className={
                  message.sender === "You" ? classes.you : classes.user1
                }
              >
                {message.text}
                <Typography className={classes.typography3}>
                  {message.timestamp}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
      <Toolbar className={classes.toolbar2}>
        <AttachFileOutlined style={{ color: "gray" }} />
        <CalendarMonth style={{ color: "gray" }} />
        <Stack direction="row" className={classes.stack}>
          <TextField className={classes.textfield} label="Type a message" />
          <EmojiEmotions style={{ color: "gray" }} />
          <Mic style={{ color: "gray" }} />
        </Stack>
        <IconButton className={classes.iconbutton}>
          <Send sx={{ transform: "rotate(-45deg)" }} />
        </IconButton>
      </Toolbar>
    </Grid>
  );
};

export default Chat;
