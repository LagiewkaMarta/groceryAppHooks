import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import GroceryItem from "./GroceryItem";

export default function GroceryList({ groceries, remove, toggleGrocery,editGrocery }) {
  if(groceries.length !== 0){
  return (
    <Paper>
      <List>
        {groceries.map((groceryItem, i) => (
          <>
            <GroceryItem
              bought={groceryItem.bought}
              name={groceryItem.name}
              id={groceryItem.id}
              key={groceryItem.id}
              remove={remove}
              toggleGrocery={toggleGrocery}
              editGrocery={editGrocery}
            />
            { i< groceries.length -1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
        }
        return null;
}
