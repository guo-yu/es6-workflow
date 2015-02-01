var customers = [{
  city: 'Seattle',
  name: 'FlandCok',
  age: 23
}];

var results = [
  for (c of customers) 
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
]

console.log(results)
