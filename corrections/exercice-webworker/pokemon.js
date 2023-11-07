self.onmessage = function (event) {
  fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${event.data}`)
    .then((response) => response.json())
    .then((data) => {
      self.postMessage(data);
    })
    .catch((e) => self.postMessage(e));
};
