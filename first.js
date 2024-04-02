const myobject = {
    "name": "Manesh",
    Age: 21,
    "class": "AIDS-B",
  };
  let elements = ["rajesh", "mandar", "chikku"]; // Changed const to let for elements
  const first = Symbol ('123');
   const second = Symbol('123'); // If you intended to define a second Symbol, you need to define it first.
  console.log(typeof first);
  console.log(typeof second); 
  console.log(first == second); // This would have resulted in an error due to `second` not being defined.
  const myfunction =function(){
    console.log("Hello world")
  }
  console.log(typeof myobject)
  console.log(typeof elements)
  
  myfunction()
  console.log(typeof myfunction)