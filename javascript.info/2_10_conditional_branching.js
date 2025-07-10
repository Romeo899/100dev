// if (a string with zero)

if ("0") {
  alert( 'Hello' );
}

// true 


// The name of JavaScript:

let answer = prompt("What's the official name of JavaScript")

answer.toLowerCase() === "ecmascript" ? console.log("right") : console.log("wrong");

// Show the sign:

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// Rewrite 'if' into '?'

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? 'Below' : 'Over';
// correct 


// Rewrite 'if..else' into '?'

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    ''


    // exactly right!

