import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";


export default function GroceryItem({name, bought}) {

    return (
        <ListItem>
            <Checkbox checked={bought} tabIndex={-1} />
        <ListItemText style={{textDecoration: bought ? "line-through" : "none" }}>
            {name} 
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Edit" >
                <EditIcon/>
            </IconButton>
            <IconButton>
                <DeleteIcon aria-label="Delete" />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
}
