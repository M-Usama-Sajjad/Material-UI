import React from "react";
import { Grid } from "@mui/material";
import Left from "../../components/Left";
import Chat from "../../components/Chat";
import Right from "../../components/Right";

const Home = () => {
  return (
    <>
      <Grid container>
        <Left />
        <Chat />
        <Right />
      </Grid>
    </>
  );
};

export default Home;
