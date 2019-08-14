import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import GroceryList from "./GroceryList";
import GroceryForm from "./GroceryForm";
const uuidv4 = require('uuid/v4');

export default function GroceryApp() {
  const initialGroceries = [];
  const [groceries, setGroceries] = useState(initialGroceries);

  const addGrocery = newGroceryItemName => {
    setGroceries([
      ...groceries,
      { id: uuidv4(), name: newGroceryItemName, bought: false }
    ]);
  };

  const removeGrocery = (groceryId) => {
    const newGroceryList = groceries.filter(grocery => grocery.id !== groceryId);
    setGroceries(newGroceryList);
  }

  const toggleGrocery = (groceryId) => {
    const newGroceryList = groceries.map(grocery => grocery.id === groceryId ? {...grocery, bought: !grocery.bought} : grocery);
    setGroceries(newGroceryList);
  }

  const editGrocery = (groceryId, newGroceryName) => {
    const newGroceryList = groceries.map(item => item.id === groceryId ? {...item, name: newGroceryName} : item);
    setGroceries(newGroceryList);
  }
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
          <GroceryList groceries={groceries} remove={removeGrocery} toggleGrocery={toggleGrocery} editGrocery={editGrocery} />
        </Grid>
      </Grid>
    </Paper>
  );
}
