// Les workers ne fonctionnement pas en lecture locale /!\
// Il faut les lancer dans un serveur
self.onmessage = function(event) {
    fetch(event.data)
    .then(response => response.json())
    .then(data => {
        self.postMessage(data);
    })
    .catch(e => self.postMessage(e));
}