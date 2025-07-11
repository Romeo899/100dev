// Check range between:

let age = prompt('enter age:')

if (age >= 14 && age <= 90) {
    alert( 'in range')
} else {
    alert('out of range')
}


// Check the login


let login = prompt('Please enter your login:')
let password;

if (login == 'Admin') {
    password = prompt('enter password: ')
    if (password == 'TheMaster') {
        alert('Welcome')
    } else if (password == '' || password === null) {
        alert('Canceled')
    } else {
        alert('Wrong Password')
    }
} else if (login == '' || login === null) {
    alert('Canceled')
} else {
    alert(`I don't know you.`)
}