function calculateAreaStandard(length = 5, width = 4) {
  return length * width;
}

const calculateAreaArrow = (length = 5, width = 4) => {
  return length * width;
};

console.log(`Standard Function Area (Default 5x4): ${calculateAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`);

function testScope() {
  var functionVar = "Accessible anywhere inside testScope";

  {
    let blockVar = "Scoped to this block";
  }

  try {
    console.log(blockVar);
  } catch (error) {
    console.log(
      "Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)"
    );
  }
}

testScope();