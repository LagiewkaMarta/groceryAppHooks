import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import GroceryItem from "./GroceryItem";

export default function GroceryList({ groceries }) {
  return (
    <Paper>
      <List>
        {groceries.map(groceryItem => (
          <>
            <GroceryItem
              bought={groceryItem.bought}
              name={groceryItem.name}
              key={groceryItem.id}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
