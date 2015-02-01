"use strict";

var customers = [{
  city: "Seattle",
  name: "FlandCok",
  age: 23
}];

var results = (function () {
  var _results = [];

  for (var _iterator = customers[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    var c = _step.value;
    if (c.city == "Seattle") {
      _results.push({ name: c.name, age: c.age });
    }
  }

  return _results;
})();

console.log(results);
//# sourceMappingURL=example.js.map