import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditGroceryItem from "./EditGroceryItem";
import useToggleState from "../hooks/useToggleState";

export default function GroceryItem({name, bought, id, remove, toggleGrocery, editGrocery}) {
    const [ isEditing, toggle ] = useToggleState(false);

    return (
        <ListItem>
            {isEditing ? <EditGroceryItem editGrocery={editGrocery} id={id} toggle={toggle} name={name} /> : 
            <>
            <Checkbox checked={bought} tabIndex={-1} onClick={() => toggleGrocery(id)}/>
        <ListItemText style={{textDecoration: bought ? "line-through" : "none" }}>
            {name} 
        </ListItemText>
        <ListItemSecondaryAction onClick={toggle}>
            <IconButton aria-label="Edit" >
                <EditIcon/>
            </IconButton>
            <IconButton onClick={() => remove(id)}>
                <DeleteIcon aria-label="Delete" />
            </IconButton>
        </ListItemSecondaryAction>
        </>
            }
      </ListItem>
            
    )
}
