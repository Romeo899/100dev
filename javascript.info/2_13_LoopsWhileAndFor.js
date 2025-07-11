// Last loop value 

// postfix & prefix in the condition of a loop can produce different results.

// output numbers from two to ten
for (let i = 2;i <= 10; i++) console.log(i);

// Output even numbers in the loop.

for (let i = 2; i <= 10; i++) {
    if (i % 2) continue;
    console.log(i)
}

// Replace "for" with "while"

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while (i<3) {
    alert(`number is ${i}!`)
    i++
}

// Repeat until the input is correct

for (let ans = 0; ans < 100; ans) {
    ans = prompt(`Enter a number bigger than 100:`)
}

// Output prime numbers

