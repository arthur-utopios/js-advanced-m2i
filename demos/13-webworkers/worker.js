self.onmessage = function(event) {
    fetch(event.data)
    .then(response => response.json())
    .then(data => {
        self.postMessage(data);
    })
    .catch(e => self.postMessage(e));
}