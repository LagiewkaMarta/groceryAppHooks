import TextField from "@material-ui/core/TextField";
import React from 'react'
import useInputState from "../hooks/useInputState";

export default function EditGroceryItem({editGrocery, id, toggle, name}) {
    const [inputValue, handleChange, reset] = useInputState(name)
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editGrocery(id, inputValue);
            toggle();
            reset();
        }}>
        <TextField onChange={handleChange} value={inputValue} margin="normal" fullWidth>
        </TextField>
        </form>
    )
}
