function myFunction() {
    var insideVariable = "Inside";
  }

var outsideVariable = "Outside";

function myFunction() {
  console.log(outsideVariable);
}

myFunction(); // "Outside"