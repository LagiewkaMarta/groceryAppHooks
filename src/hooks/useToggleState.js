import { useState } from "react";

export default (isEdited = false) => {
    const [isEditing, setIsEditing] = useState(isEdited);
    const toggle = () => {
        setIsEditing(!isEditing);
    }
    return [isEditing, toggle];
}