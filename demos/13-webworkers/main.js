let worker = new Worker('./worker.js');

worker.postMessage('https://dummyjson.com/products/1');

worker.onmessage = function(event) {
    console.log(event.data);
}