// Is "else" required?

/* no difference */

// Rewrite the Function using '?' or '||'

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Function min(a,b)

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    } 

}

min(2,5) // 2
// min(3,-1) // -1
// min(1,1) // 1

// Function pow(x,n)



function pow(x,n) {
    return x ** n;
}

pow(2,5)