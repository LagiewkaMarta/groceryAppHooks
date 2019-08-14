import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

export default function GroceryForm({ addGrocery }) {
  const [groceryValue, updateGroceryValue, resetGroceryValue] = useInputState(
    ""
  );
  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault();
          addGrocery(groceryValue);
          resetGroceryValue();
        }}
      >
        <TextField onChange={updateGroceryValue} value={groceryValue} />
      </form>
    </Paper>
  );
}
