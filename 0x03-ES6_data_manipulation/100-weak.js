// Defining a const instance of WeakMap and naming it weakMap
const weakMap = new WeakMap();

// Exporting the weakMap constant
export { weakMap };

// Define the queryAPI function
function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If it is, increment the count by 1
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
    
    // Check if the number of queries is >= 5
    if (count + 1 >= 5) {
      // If it is, throw an error
      throw new Error('Endpoint load is high');
    }
  }
}

// Exporting the queryAPI function as default
export default queryAPI;

