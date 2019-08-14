import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

export default function GroceryForm({ addGrocery }) {
  const [groceryValue, updateGroceryValue, resetGroceryValue] = useInputState(
    ""
  );
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addGrocery(groceryValue);
          resetGroceryValue();
        }}
        >
        <TextField onChange={updateGroceryValue} value={groceryValue} 
        margin="normal"
        label="Add New Grocery Item"
        fullWidth
        />
      </form>
    </Paper>
  );
}
