// We have an input for degrees.
// When you click a button you want it to output in span the farhernheit result

// Assume it's a num.

// event listener for button
// onclick you run a calcfunction and output in span result.


// only do this on click

document.querySelector('#yell').addEventListener('click', run)

function run() {
  // get value out of input
  let cValue = document.querySelector('#celsiusValue').value

  // convert the value
  cValue = cValue * 9/5 + 32

  // show the value to user.
  document.querySelector('#placeToYell').innerText = cValue
}