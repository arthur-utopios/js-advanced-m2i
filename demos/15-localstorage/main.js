localStorage.setItem('token', '6e453a0e-b5d7-4b53-9f72-754e766b2f87');

console.log(localStorage.getItem('token'));

localStorage.setItem('secret', 'I love pdf')

for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);
    console.log(key);
}

for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
        console.log(key);
    }
}

let user = {
    id: 1,
    firstName: "John",
    lastName: "Doe"
}

localStorage.setItem('user', JSON.stringify(user));
console.log(localStorage.getItem('user'));

