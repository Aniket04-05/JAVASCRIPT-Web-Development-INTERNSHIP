// 1. Data & Input Initialization
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");

let newName = "";
let newPrice = 0;

// 3. Loops & Flow Control (Input Validation)
while (true) {
  // Capture inputs (defaults provided to match expected output)
  newName = prompt("Enter new product name:", "Monitor");
  let priceInput = prompt(`Enter price for ${newName}:`, "150");
  
  // Explicit type conversion
  newPrice = Number(priceInput);

  // Handle missing or bad inputs using conditional evaluate and continue
  if (!newName || isNaN(newPrice) || newPrice <= 0) {
    console.log("Invalid input detected. Restarting prompt...");
    continue; // Skips the rest of the loop and prompts again
  } else {
    break; // Exits loop cleanly once valid data is received
  }
}

// Log initialization status and update array
console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]\n`);
inventory.push({ name: newName, price: newPrice });

// 2. Control Flow & Conditional Evaluation
function determineCategory(price) {
  let category;
  // Evaluate category badges using if...else logic within a switch block
  switch (true) {
    case (price >= 500):
      category = "Premium";
      break;
    case (price >= 50 && price < 500):
      category = "Standard";
      break;
    default:
      category = "Budget";
  }
  return category;
}

// 4. Functions & Scope
const calculateTotalValue = (itemsArray) => {
  let total = 0; // Securely scoped variable
  for (let i = 0; i < itemsArray.length; i++) {
    total += itemsArray[i].price;
  }
  return total;
};

// 5. Array Methods & Iteration
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  const category = determineCategory(item.price);
  console.log(`- Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

console.log("\n--- Financial Analytics ---");
// Execute standard calculation
console.log(`Total Inventory Value: $${calculateTotalValue(inventory)}`);

// Filter method
const affordableNames = inventory
  .filter(item => item.price < 200)
  .map(item => `"${item.name}"`);
console.log(`Filtered Affordable Items (Under $200): [${affordableNames.join(", ")}]`);

// Map method
const formattedReport = inventory.map(item => `"${item.name.toUpperCase()}: $${item.price}"`);
console.log(`Formatted Report List: [${formattedReport.join(", ")}]`);