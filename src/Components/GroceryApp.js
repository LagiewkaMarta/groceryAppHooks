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
    { id: 1, groceryItem: "tomato", completed: false },
    { id: 2, groceryItem: "shrimps", completed: true },
    { id: 3, groceryItem: "cheddar cheese", completed: false }
  ];
  const [groceries, setGroceries] = useState(initialGroceries);

  const addGrocery = (newGroceryItemName) => {
    setGroceries([...groceries, {id: 4, groceryItem: newGroceryItemName, completed:false}])
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
      <GroceryForm addGrocery = {addGrocery}/>
      <GroceryList groceries={groceries}/>
    </Paper>
  );
}
