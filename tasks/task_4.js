function greet(name = "Guest") {
    console.log(`Hello, ${name}! Welcome.`);
  }
  
  // Call the function without passing a name argument
  greet();
  
  // Call the function with a name argument
  greet("Alice");