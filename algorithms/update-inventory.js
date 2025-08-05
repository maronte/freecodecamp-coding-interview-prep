/**
 * Compare and update the inventory stored in a 2D array against a second 2D array
 * of a fresh delivery. Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 * 
 * input example: [
 * [21, "Bowling Ball"],
 * [2, "Dirty Sock"],
 * [1, "Hair Pin"],
 * [5, "Microphone"]
 * ]
 */
function updateInventory(currentInventory, newInventory) {
  const currentInventoryObject = mapArrayToObject(currentInventory);
  newInventory.forEach(pair => {
    const [ quantity, product ] = pair;
    if (currentInventoryObject[product]) {
      currentInventoryObject[product] += quantity;
    } else {
      currentInventoryObject[product] = quantity;
    }
  });
  return mapObjectToArray(currentInventoryObject);
}

function mapArrayToObject(arr) {
  return arr.reduce((reducer, currentValue) => {
    const [ quantity, product ] = currentValue;
    reducer[product] = quantity;
    return reducer;
  }, {});
}

function mapObjectToArray(obj) {
  const productToQuantities = Object.entries(obj);
  const productToQuantitiesSorted = productToQuantities.sort((a, b) => {
    const aName = a[0];
    const bName = b[0];
    if (aName < bName) {
      return -1;
    } else if (aName > bName) {
      return 1;
    }
    return 0;
  });
  const quantitiesToProduct = productToQuantitiesSorted.map(pair => [pair[1], pair[0]]);
  return quantitiesToProduct;
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))