//Write your pseduo code first! 

// Store the celsius value in a variable.
// let celsius = document.querySelector('celsiusConverter').innertext 

// // we are going to create a fahrenheit converter variable that will convert the celsius value by using the formula

// let fahrenheitConvert = (celsius * 9/5) + 32

// // Then console.log(fahrenheitConvert)

// console.log(fahrenheitConvert)


// Leon's answer:

// only on click:
document.querySelector('#yell').addEventListener('click', run)


function run() {
    // const fName = document.querySelector('#firstName').value
    console.log('Hi')
    //convert the value
    let pumpkin = document.querySelector('#firstName').value

    pumpkin = pumpkin * 9/5 + 32

    document.querySelector('#placeToYell').innerText = pumpkin
  }