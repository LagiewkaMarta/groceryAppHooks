import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import GroceryList from "./GroceryList";
import GroceryForm from "./GroceryForm";

export default function GroceryApp() {
  const initialGroceries = [
    { id: 1, name: "tomato", bought: false },
    { id: 2, name: "shrimps", bought: true },
    { id: 3, name: "cheddar cheese", bought: false }
  ];
  const [groceries, setGroceries] = useState(initialGroceries);

  const addGrocery = newGroceryItemName => {
    setGroceries([
      ...groceries,
      { id: 4, name: newGroceryItemName, bought: false }
    ]);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit"> GROCERY LIST WITH HOOKS </Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center" style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4}>
          <GroceryForm addGrocery={addGrocery} />
          <GroceryList groceries={groceries} />
        </Grid>
      </Grid>
    </Paper>
  );
}
