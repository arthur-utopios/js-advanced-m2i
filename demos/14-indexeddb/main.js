const indexedDB = window.indexedDB;
let db;

function init() {
    const request = indexedDB.open('UserDB', 1);

    request.onerror = function(event) {
        console.error('Problème détecté sur IndexedDB');
        console.error(event);
    }
    
    request.onupgradeneeded = function() {
        const db = request.result;
        const userStore = db.createObjectStore("users", {keyPath: "username"});
        userStore.createIndex("user_name", "name", {unique: false});
        userStore.createIndex("user_email", "email", {unique: true});
    }
    
    request.onsuccess = function(event) {
        db = event.target.result;
        console.log('Base de données ouverte avec succès !');
        listUsers()
    }
}

async function listUsers() {
    let tx = db.transaction("users", "readonly");
    let userStore = tx.objectStore("users");

    userStore.getAll().onsuccess = function(event) {
        let usersList = document.getElementById('users');

        let users = event.target.result;

        if (users.length) {
            usersList.innerHTML = users.map(user => `<div>UserName: ${user.username}, Name: ${user.name}, email: ${user.email}</div>`).join('');
        } else {
            usersList.innerHTML = `<div>No users in database</div>`;
        }

    }
}

async function addUser() {
    let username = prompt("saisir un pseudo: ");
    let name = prompt("Saisir un nom: ");
    let email = prompt("Saisir email: ");

    console.log(db);
    let tx = db.transaction("users", "readwrite");
    let userStore = tx.objectStore("users");
    
    let request = userStore.add({username, name, email});

    request.onsuccess = function () {
        console.log("L'utilisateur a bien été créé en base de données");
        listUsers();
    }

    request.onerror = function(event) {
        console.log(`Problème lors de l'enregistrement de l'utilisateur ${username}`);
        console.error(event);
    }

}

async function clearUsers() {
    let tx = db.transaction("users", "readwrite");
    let userStore = tx.objectStore("users");
    let result = userStore.clear();

    result.onsuccess = function() {
        listUsers();
    }
    
    result.onerror = function(event) {
        console.error(event);
    }
}

init();

create.addEventListener('click', addUser);
remove.addEventListener('click', clearUsers);