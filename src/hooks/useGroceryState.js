import useLocalstorageState from "./useLocalstorageState";
const uuidv4 = require("uuid/v4");

export default (initialGroceries) => {

    const [groceries, setGroceries] = useLocalstorageState("groceries", initialGroceries);

    return {
        groceries,

        addGrocery : newGroceryItemName => {
            setGroceries([
              ...groceries,
              { id: uuidv4(), name: newGroceryItemName, bought: false }
            ]);
          },

          removeGrocery:  groceryId => {
            const newGroceryList = groceries.filter(
              grocery => grocery.id !== groceryId
            );
            setGroceries(newGroceryList);
          },


          toggleGrocery: groceryId => {
            const newGroceryList = groceries.map(grocery =>
              grocery.id === groceryId
                ? { ...grocery, bought: !grocery.bought }
                : grocery
            );
            setGroceries(newGroceryList);
          },

          editGrocery: (groceryId, newGroceryName) => {
            const newGroceryList = groceries.map(item =>
              item.id === groceryId ? { ...item, name: newGroceryName } : item
            );
            setGroceries(newGroceryList);
          }
    }
}







