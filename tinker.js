// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(catSays) {
    return "Hello " + catSays(3);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);

  const seasons = ["spring", "summer", "fall"];
const length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);
