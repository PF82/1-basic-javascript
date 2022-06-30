// Introducing Else Statements
/*
When a condition for an if statement is true, the block of code following it is executed. What about when that 
condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

Combine the if statements into a single if/else statement.
*/


function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val) {
        result = "Bigger than 5";
    }

    if (val) {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);


console.log(testElse(4))
document.getElementById("demo").innerHTML = testElse(4);