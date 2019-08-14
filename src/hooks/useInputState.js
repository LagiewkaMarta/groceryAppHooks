import { useState } from "react";

export default (inputVal = "") => {
    const [inputValue, setInputValue] = useState(inputVal);

    const handleChange = e => {
        setInputValue(e.target.value)
    }
    const reset = () => {
        setInputValue("")
    }
    return [inputValue, handleChange, reset];
}