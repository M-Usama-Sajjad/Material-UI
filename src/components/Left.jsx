import {
  ArrowDownward,
  KeyboardArrowDown,
  Message,
  Phone,
  Search,
  InfoOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  List,
  ListItem,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "end",
    backgroundColor: "white",
    height: "76px",
  },
  message: {
    color: "blue",
    margin: "10px",
  },
  phone: {
    marginRight: "-20px",
    marginLeft: "4px",
    color: "gray",
  },
  box: {
    backgroundColor: "#F3F4F6",
  },
  input: {
    borderRadius: "50px !important ",
    width: "92%",
    height: "41px",
    margin: "0 13px",
    border: "1px solid",
  },
  list: {
    marginTop: "-16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": { display: "none" },
    height: "468px",
  },

  listItemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "white",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)", // equivalent to theme.shadows[2]
    borderRadius: "4px",
    padding: "3px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
  },
  userName: {
    fontWeight: 500,
  },
  userStatus: {
    fontSize: "0.75rem",
  },
  userTime: {
    fontSize: "0.75rem !important",
  },
  //   userTimeContainer:{
  //     display:"flex !important",
  //     fontWeight:100,
  //     justifyContent:"center !important",

  //   },

  avatar: {
    background: "linear-gradient(to bottom, #d030c5, #586eee)",
    color: "white",
    borderRadius: "50%",
  },
  tabRoot: {
    minWidth: "100px",
    color: "white",
    "&.Mui-selected": {
      background: "linear-gradient(to bottom, #586eee, #d030c5)",
    },
  },
  iconButton: {
    borderRadius: "100px !important",
    color: "white !important",
    fontSize: "medium !important",
    width: "166px !important",
    height: "32px !important",
    margin: "20px !important",
    background: "linear-gradient(to bottom, #d030c5, #586eee) !important",
  },
  tabsIndicator: {
    display: "none",
  },

  tabs: {
    background: "linear-gradient(to bottom, #d030c5, #586eee) !important",
    borderRadius: "50px !important",

    textDecoration: "none !important",
    color: "white !important",
    textDecoration: "none !important",
    minHeight: "24px !important",
    minWidth: "80px !important",
    padding: "6px 8px !important",
    margin: "10px",
  },
  tabs1: {
    borderRadius: "50px !important",
    border: "1px solid !important",
    background: "white !important",
    color: "white !important",
    textDecoration: "none !important",
    minHeight: "24px !important",
    minWidth: "75px !important",
    padding: "6px 8px !important",
    color: "black ",
    margin: "10px",
  },
  tabmaj: {
    width: "100%",
    overflow: "hidden",
    marginTop: "15px ",
    marginLeft: "5px",
  },
}));

const Left = () => {
  const classes = useStyles();

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: "Mishal Irfan", status: "scheduled", avatar: "MI" },
    { id: 2, name: "Zunaira Butt", status: "broadcast", avatar: "ZB" },
    { id: 3, name: "Kamran Masood", status: "scheduled", avatar: "KM" },
    { id: 4, name: "Asad Najam ", status: "scheduled", avatar: "AN" },
    { id: 5, name: "Brown", status: "broadcast", avatar: "B" },
    { id: 6, name: "User 6", status: "scheduled", avatar: "U6" },
  ]);

  useState(() => {
    setFilteredUsers(users);
  }, [users]);

  const [activeTab, setActiveTab] = useState(0);

  const userTypes = ["All", "Scheduled", "Broadcast"];

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
    let filUsers = users;
    if (newValue === 1) {
      filUsers = users.filter((user) => user.status === "scheduled");
    } else if (newValue === 2) {
      filUsers = users.filter((user) => user.status === "broadcast");
    }
    setFilteredUsers(filUsers);
  };

  return (
    <Grid md={2.5}>
      <Toolbar className={classes.toolbar}>
        <Message className={classes.message} />
        <Phone className={classes.phone} />
      </Toolbar>
      <Box className={classes.box}>
        <IconButton className={classes.iconButton}>
          All Numbers <KeyboardArrowDown />
        </IconButton>

        <OutlinedInput
          id="input-with-icon-adornment"
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          className={classes.input}
        />
        <Tabs
          value={activeTab}
          onChange={handleChangeTab}
          aria-label="User Types"
          className={classes.tabmaj}
          classes={{ indicator: classes.tabsIndicator }}
        >
          {userTypes.map((type, index) => (
            <Tab
              key={index}
              label={type}
              className={`${activeTab == index ? classes.tabs : classes.tabs1}`}
              sx={{ margin: "3px" }}
            />
          ))}
        </Tabs>

        <List className={classes.list}>
          {filteredUsers.map((user) => (
            <ListItem key={user.id} button>
              <Box className={classes.listItemContainer}>
                <Box className={classes.userInfo}>
                  <Avatar className={classes.avatar}>
                    <span>{user.avatar}</span>
                  </Avatar>
                  <Box sx={{ marginLeft: "20px" }}>
                    <Typography
                      variant="inherit"
                      className={classes.userName}
                      sx={{ fontWeight: 400 }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      variant=""
                      className={classes.userStatus}
                      sx={{ fontWeight: 100 }}
                    >
                      Are you available?
                    </Typography>
                  </Box>
                </Box>
                <Stack
                  direction={"column"}
                  className={classes.userTimeContainer}
                  sx={{ fontWeight: 100 }}
                >
                  <Typography variant="" className={classes.userTime}>
                    2:56PM
                  </Typography>
                  <IconButton>
                    <InfoOutlined fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default Left;
