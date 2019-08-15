import { useState, useEffect } from "react";

function useLocalstorageState(key, defaultVal) {
  // make a piece of state based off of value in localstorage, if there's no value, set the piece of state to defaultVal
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key)) || defaultVal;
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });



  
  // use useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalstorageState;
