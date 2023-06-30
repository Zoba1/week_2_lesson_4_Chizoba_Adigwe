function outerFunction() {
    const outerVariable = "Hello";
  
    function innerFunction() {
      console.log(outerVariable + " World!");
    }
  
    return innerFunction;
  }
  
  // Call the outer function and store the returned inner function in a variable
  const inner = outerFunction();